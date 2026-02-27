import { useState, useMemo } from 'react';

export const useProjectFilter = (initialData) => {
  const [searchQuery, setSearchQuery] = useState('');

  // DSA: Using a Hash Set to extract unique tags efficiently (O(N) complexity)
  const allUniqueTags = useMemo(() => {
    const tagsSet = new Set();
    Object.values(initialData).flat().forEach(project => {
      project.tags.forEach(tag => tagsSet.add(tag));
    });
    return Array.from(tagsSet).sort();
  }, [initialData]);

  // DSA/Algorithm: Filtering logic (Linear Search O(N * M))
  const filteredData = useMemo(() => {
    if (!searchQuery.trim()) return initialData;

    const query = searchQuery.toLowerCase();
    const result = {};

    for (const [category, projects] of Object.entries(initialData)) {
      const matchedProjects = projects.filter(project => 
        project.title.toLowerCase().includes(query) ||
        project.description.toLowerCase().includes(query) ||
        project.tags.some(tag => tag.toLowerCase().includes(query))
      );

      if (matchedProjects.length > 0) {
        result[category] = matchedProjects;
      }
    }
    return result;
  }, [initialData, searchQuery]);

  return {
    searchQuery,
    setSearchQuery,
    filteredData,
    allUniqueTags
  };
};