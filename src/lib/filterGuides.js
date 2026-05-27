export function filterGuides(guides, state) {
  return guides.filter((guide) => {
    const matchesSearch =
      state.search === '' ||
      guide.title.toLowerCase().includes(state.search.toLowerCase()) ||
      guide.summary.toLowerCase().includes(state.search.toLowerCase()) ||
      guide.category.toLowerCase().includes(state.search.toLowerCase()) ||
      guide.tags.some((tag) => tag.toLowerCase().includes(state.search.toLowerCase()));

    const matchesCategory = state.category === 'Alle' || guide.category === state.category;

    const matchesExpansion = state.expansion === 'all' || guide.expansion === state.expansion;

    const matchesPremium = !state.showPremiumOnly || guide.premium;

    return matchesSearch && matchesCategory && matchesExpansion && matchesPremium;
  });
}
