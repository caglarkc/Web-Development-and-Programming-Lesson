class Present {
  constructor(containerElement) {
    this.containerElement = containerElement;
    
    // Bind event listeners.
    this._openPresent = this._openPresent.bind(this);
    
    // Create image and append to container.
    this.image = document.createElement('img');
    this.image.src = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/1083533/gift-icon.png';
		this.image.addEventListener('click', this._openPresent);
    this.containerElement.append(this.image);
  } 
  
  _openPresent(event) {
    this.image.src = 'https://media.giphy.com/media/27ppQUOxe7KlG/giphy.gif';
  	this.image.removeEventListener('click', this._openPresent);
  }
}


