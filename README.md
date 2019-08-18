# Vue Library
# Props
1. **images** (required): Accepts array of objects.
2. **starting-image** (optional) [DEFAULT: 0]: Accepts the index of the image that the carousel starts from
3. **auto-slide-interval** (optional): time in milliseconds to auto slide to the next image e.g. 1000, which is 1 second
```javascript
    //Example of images
    let items = [
        {
            id: '1',
            src: 'path to full image',
        },
        {
            id: '2',
             src: 'path to full image',
        }
    ]
```

## Example usage

```html
<!-- Example -->
<carousel
    :starting-image="2"
    :images="items"
></carousel>
```
```html
<!-- Example with auto slide-->
<carousel
  :starting-image="2"
  :images="items"
  :auto-slide-interval="3000"
></carousel>
```
```html

### Using carousel with hooper, hooper is carousel Library

```html
<!-- Example-->
<HooperCarousel
  :hooperStyle="hooperStyle"
  :hooperSettings="smallHooper"
  :items="items"
></HooperCarousel>
```
```html
