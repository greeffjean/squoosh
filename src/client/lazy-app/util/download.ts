async function legacyDownload(
  blobURLArray: Array<{ url: string; name: string }>,
) {
  blobURLArray.forEach(({ url, name }) => {
    const link = document.createElement('a');
    link.href = url;
    link.download = name || 'download';
    link.click();
    URL.revokeObjectURL(url);
    link.remove();
  });
}

export { legacyDownload };
