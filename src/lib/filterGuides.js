export function filterGuides(guides, filters) {
  const query = filters.search.trim().toLowerCase();

  return guides.filter((guide) => {
    const matchesSearch =
      query.length === 0 ||
      [guide.title, guide.summary, guide.category, guide.audience, ...guide.tags]
        .join(' ')
        .toLowerCase()
        .includes(query);
    const matchesCategory = filters.category === 'Alle' || guide.category === filters.category;
    const matchesExpansion = filters.expansion === 'all' || guide.expansion === filters.expansion;
    const matchesPremium = !filters.showPremiumOnly || guide.premium;

    return matchesSearch && matchesCategory && matchesExpansion && matchesPremium;
  });
}
