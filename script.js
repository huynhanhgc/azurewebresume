async function updateVisitorCount() {
  try {
    const response = await fetch('/api/visitorCounter');

    if (!response.ok) {
      throw new Error('API request failed');
    }

    const data = await response.json();
    document.getElementById('visitor-count').textContent = data.count;
  } catch (error) {
    console.error('Visitor counter error:', error);
    document.getElementById('visitor-count').textContent = 'Unavailable';
  }
}

updateVisitorCount();