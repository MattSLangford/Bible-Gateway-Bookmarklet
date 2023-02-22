javascript:(function() {
  const reference = document.querySelector('.bcv .dropdown-display-text').textContent.trim();
  const translation = document.querySelector('.translation .dropdown-display-text').textContent.trim();
  const verses = Array.from(document.querySelectorAll('.passage-content')).map(el => {
    el.querySelectorAll('.full-chap-link, .footnotes, .crossrefs, .crossreference, .footnote').forEach(link => link.remove());
    const textWithLineBreaks = el.textContent.replace(/(\d+)/g, '\n$1');
    return textWithLineBreaks.trim();
  }).join('\n');
  const textToCopy = `${reference} (${translation})\n${verses}`;
  navigator.clipboard.writeText(textToCopy).then(() => alert('Bible reference and verses have been copied to the clipboard!'));
})();
