async function legacyDownload(blobURLArray: Array<string>) {
  blobURLArray.forEach((url) => {
    const link = document.createElement('a');
    link.href = url;
    link.download = url.split('/').pop() || 'download';
    link.click();
    URL.revokeObjectURL(url);
    link.remove();
  });
}

export { legacyDownload };
