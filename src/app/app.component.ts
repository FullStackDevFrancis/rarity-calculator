import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'rarity-calculator';

  allBackgrounds = ['Gold', 'Light Blue', 'Matchstick', 'Mint', 'Neon Green', 'Neon Pink', 'Orange', 'Parma', 'Pink', 'Red', 'Silver', 'Teal']
  allSkins = ['Brown Skin', 'Dark Skin', 'Dark Tan', 'Sunbed Tan', 'Tan', 'White Skin', 'Zombie Skin']
  allClothes = ['Clothes	Black Hoody', ' Black Vest & Blue Jeans', 'Clothes	Black Suit', 'Black Suit with Red Rose',
    'Black Suit with White Rose', 'Black Vest & Blue Jeans', 'Blue Hawaiian Shirt & Blue Jeans', 'Brown Suit',
    'Brown Suit', 'Green Suit', 'Pink Suit', 'Red Suit', 'Red T-Shirt & Blue Jeans', 'White Suit with Red Rose',
    'White Suit with White Rose', 'White Suit', 'White T Shirt & Blue Jeans']
  allFacialHair = ['Full Beard', 'Goatee', 'Handlebars', 'Moustache', 'No Facial Hair', 'None']
  allHair = ['Black Hair', 'Blonde Hair', 'Dreadlocks', 'White Beard and Hair', 'Yellow Hair']
  allHeadWear = ['Cap', 'Cowboy', 'Crown', 'Fedora white', 'Fedora', 'Halo', 'Horns', 'None', 'Pirate Hat', 'Sweatband']
  allGlasses = ['3D Glasses', 'Anime Glasses', 'Black Glasses', 'Black Sunglasses', 'Eye Glasses', 'Gold Glasses', 'Green Sunglasses',
    'Normal Eye', 'Red Shades', 'Sleep Mask', 'Square Glasses']
  allWeapons = ['none', 'Gold Hand Gun', 'Gold Machine Gun', 'Rifle', 'Hand Gun', 'Machine Gun']
  allAccessories = ['none', 'Cigarette', 'Cuban Cigar', 'Face Mask', 'Gold Bitcoin Chain', 'Gold Chain with Ruby', 'Gold Ethereum Chain',
    'Gold Watch', 'Red Neck Tie', 'Silver Bitcoin Chain', 'Silver Ethereum Chain', 'White Sneakers']


  logo = 'https://eightbitmafia.com/assets/img/MafiaLogo.png'
}


