import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { baseUrl } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CameraService {

  constructor(private http: HttpClient) { }
  uploadPicture(data) {
    console.log(data)
    return this.http.post<any>(`${baseUrl}imagenes`, data).toPromise()
  }


  async takePicture() {
    const capturedPhoto = await Camera.getPhoto({
      resultType: CameraResultType.Base64, 
      source: CameraSource.Camera, 
      quality: 100,
      allowEditing: true
    });
  const response = await this.uploadPicture({imageUrl: capturedPhoto.base64String})
  return response;
  }
}
