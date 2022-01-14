import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ShortenURLService } from './shorten-url.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'url-shortening-api-landing-page';

  shortenUrlArray: {oldUrl: string, newUrl: string, buttonInnerHtml: string, backgroundColor: string}[] = []

  @ViewChild('buttonElement') el: ElementRef;

  longUrl = '';
  shortUrl = '';
  linkIsValid = false;
  linkValidation = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/gm;
  linkSubmitted = false;
  error = null;

  shortUrlObj: Object = {
    oldUrl: '',
    newUrl: '',
  }

  //request to http://tinyurl.com/api-create.php?url=http://www.example.com/

  //toggleHamburgerMenu
  toggleHamburgerMenu = false;

  constructor(private shortenURLService: ShortenURLService) {}
  ngOnInit(): void {
  
  }

  validateLink(tempUrl: string){
    console.log(tempUrl);
    console.log(tempUrl.match(this.linkValidation));
    this.error = null;

    //check if the link is valid
    if(tempUrl.match(this.linkValidation)){

      //if link is valid
      console.log('valid');
      this.linkIsValid = true;

      //if link is valid then we send request for short url
      this.onShortenUrl(tempUrl);

    }else {

      //if link is not valid
      console.log('invalid');
      this.linkIsValid = false;
      this.linkSubmitted = true;

    }

  }

  onShortenUrl(longUrl: string){
    console.log(longUrl);
    this.longUrl = longUrl;

    this.shortenURLService.shortenUrl(longUrl).subscribe(newUrl => {
      console.log(newUrl);
      this.shortUrl = newUrl;
      this.shortenUrlArray.push({oldUrl: this.longUrl, newUrl: this.shortUrl, buttonInnerHtml: 'Copy', backgroundColor: '#2acfcf' })
      this.resetValues();
    },error => {
      console.log('Error is: ' + error.message);
      this.error = error.message;
      console.log(this.longUrl);
      console.log(this.shortUrl);
      console.log(this.linkIsValid);
      console.log(this.linkSubmitted);

    });

    //to remove the long Url once the url has been shortened;

    //before sending a request we should check first if the input is a website
    //if not, make the user aware that it should be a website but not send a request yet
    //only once a successful request is sent, the longUrl to be reset
    //some validation on the input
  }

  resetValues(){
    this.longUrl = '';
    this.shortUrl = '';
    this.linkIsValid = false;
    this.linkSubmitted = false;
    this.error = null;
  }
  
  onToggleHamburgerMenu(){
    this.toggleHamburgerMenu = !this.toggleHamburgerMenu;
  }

  copyTextClipboard(val: string){
    const selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = val;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);

  }

  onCopyButton(shortLinkArray: {oldUrl: string, newUrl: string, buttonInnerHtml: string, backgroundColor: string}){
    console.log(shortLinkArray.oldUrl);
    shortLinkArray.backgroundColor = '#3a3053';
    shortLinkArray.buttonInnerHtml = 'Copied'
  }

}
