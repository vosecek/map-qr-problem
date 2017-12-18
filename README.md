# map-qr-problem

```
npm i
ionic cordova prepare
ionic cordova platform add ios
ionic cordova plugin add https://github.com/mapsplugin/cordova-plugin-googlemaps#multiple_maps --variable API_KEY_FOR_ANDROID=KEY --variable API_KEY_FOR_IOS=KEY --no-fetch
ionic cordova build ios --debug
```

open qr scanner by camera icon - can not be closed
once the stable branch (without #multiple_maps) is installed, qr scanner is closable
