const dialog = document.querySelector<HTMLDialogElement>('#guide-image-viewer');
const viewerBody = dialog?.querySelector<HTMLElement>('.guide-viewer-body');
const sizeButton = dialog?.querySelector<HTMLButtonElement>('[data-image-size]');
let opener: HTMLButtonElement | null = null;
let savedOverflow = '';

if (dialog && viewerBody && sizeButton) {
  document.querySelectorAll<HTMLButtonElement>('.guide-shot-open').forEach(button => {
    button.addEventListener('click', () => {
      const figure = button.closest('figure');
      const stage = button.querySelector('.guide-shot-stage');
      if (!figure || !stage) return;
      opener = button;
      viewerBody.replaceChildren();
      const copy = stage.cloneNode(true) as HTMLElement;
      // IDs stay unique even while the original figure remains on the page.
      copy.querySelectorAll<SVGMarkerElement>('marker[id]').forEach(marker => {
        const oldId = marker.id;
        marker.id = `${oldId}-viewer`;
        copy.querySelectorAll(`[marker-end="url(#${oldId})"]`).forEach(arrow => arrow.setAttribute('marker-end', `url(#${marker.id})`));
      });
      const image = copy.querySelector('img');
      if (image) image.loading = 'eager';
      viewerBody.append(copy);
      const legend = figure.querySelector('.guide-shot-legend');
      if (legend) viewerBody.append(legend.cloneNode(true));
      viewerBody.classList.remove('is-original-size');
      sizeButton.textContent = '原尺寸查看';
      sizeButton.setAttribute('aria-pressed', 'false');
      savedOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      dialog.showModal();
      viewerBody.scrollTop = 0;
      viewerBody.scrollLeft = 0;
    });
  });
  dialog.querySelector('[data-image-close]')?.addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', event => { if (event.target === dialog) dialog.close(); });
  dialog.addEventListener('close', () => {
    document.body.style.overflow = savedOverflow;
    viewerBody.replaceChildren();
    opener?.focus({ preventScroll: true });
  });
  sizeButton.addEventListener('click', () => {
    const original = viewerBody.classList.toggle('is-original-size');
    sizeButton.textContent = original ? '适应屏幕' : '原尺寸查看';
    sizeButton.setAttribute('aria-pressed', String(original));
  });
}
