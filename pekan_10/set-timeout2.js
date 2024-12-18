/**  
 * @param {string} result - Nama file yang didownload  
 */  
const showDownload = (result) => {  
    console.log("Download selesai");  
    console.log(`Hasil Download: ${result}`);  
  };  
  
  /**    
   * @returns {Promise<string>} 
   */  
  const download = () => {  
    return new Promise((resolve) => {  
      setTimeout(() => {  
        const result = "windows-10.exe";  
        resolve(result);  
      }, 3000);  
    });  
  };  
  
  // Menggunakan Promise  
  download().then(showDownload);  
  
  // Atau menggunakan Async/Await  
  const performDownload = async () => {  
    const result = await download();  
    showDownload(result);  
  };  
  