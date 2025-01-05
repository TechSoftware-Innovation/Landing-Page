import {headerImagePlaceholder, headerVideo} from "../modules/constants.js";

export function hidePreloadedImageBanner() {
  if (headerVideo) headerVideo.classList.add('loaded');
  if (headerImagePlaceholder) headerImagePlaceholder.style.display='none';
}