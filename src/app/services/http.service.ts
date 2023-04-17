import { Directory, Filesystem } from '@capacitor/filesystem';
import { Injectable } from '@angular/core';
import { Http, HttpDownloadFileResult, HttpOptions } from '@capacitor-community/http';
import { from, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class HttpService {

  constructor() { }

  doGet(url) {
    const options: HttpOptions = {
      url
    };

    return from(Http.get(options));
  }

  doPost(url): Observable<any> {
    const options: HttpOptions = {
      url,
      method: 'POST'
    };
    return from(Http.request(options));
  }

  async downloadFile() {
    const path = `${new Date().getTime()}.jpg`;

    const options = {
      url: 'https://devdactic.fra1.digitaloceanspaces.com/airbnb-course/category-3.jpg',
      filePath: path,
      fileDirectory: Directory.Documents,
      method: 'GET'
    }

    const response: HttpDownloadFileResult = await Http.downloadFile(options);
    //console.log(response);

    if(response.path) {
      const read = await Filesystem.readFile({
        path,
        directory: Directory.Documents
      });
      return `data:image/jpeg;base64, ${read.data}`;
    } else if(response.blob) {
      return await this.convertBlobToBase64(response.blob) as string;
    }


  }

  // Helper function
  convertBlobToBase64 = (blob: Blob) => new Promise((resolve, reject) => {
    const reader = new FileReader;
    reader.onerror = reject;
    reader.onload = () => {
        resolve(reader.result);
    };
    reader.readAsDataURL(blob);
  });

}
