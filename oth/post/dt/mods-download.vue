<template>
  <button @click="downloadFile">下载文件</button>
</template>

<script>
export default {
  name: 'DownloadButton',
  methods: {
    downloadFile() {
      const fileURL = 'path/to/your/file.pdf'; // 替换为你的文件路径
      const link = document.createElement('a');
      link.href = fileURL;
      link.download = 'file.pdf'; // 下载文件名
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  }
}
</script>