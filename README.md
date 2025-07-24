# Phaser Vite TypeScript Electron Template

## Быстрый старт

Установка

```
yarn install
```

Для тестирования приложения в браузере

```
yarn web
```

Для запуска в оконном режиме

```
yarn dev
```

## Билд под десктопные устройства

Выполняем предварительную сборку

```
yarn build
```

Собираем приложение под десктоп

```
yarn make
```

Готовое приложение будет лежать в папке

```
out/template-vite-ts-win32-x64/template-vite-ts.exe
```

## Билд под мобильные устройства

Сборку делаем через capacitor. Полностью все происходит в несколько шагов.

Установим зависимости (уже сделано)

```
yarn add -D @capacitor/core @capacitor/cli
```

Добавим в проект (уже сделано)

```
yarn cap init имя_вашего_проекта com.yourcompany.yourapp --web-dir=dist
```

Добавляем мобильное устройство

```
yarn cap add android
```

Выполняем предварительную сборку

```
yarn build
```

Копируем собранный проект для следующего этапа

```
yarn cap copy
```

Для дальнейшей сборки под android лучше всего работать в контейнере nodejs из проекта https://github.com/isengine/server.git

Перейдем в папку

```
cd android
```

Билд в режиме дебаг:

```
./gradlew assembleDebug
```

Готовое приложение будет лежать в папке

```
android/app/build/outputs/apk/debug/app-debug.apk
```

Билд в продакшн:

```
./gradlew assembleRelease
```

Готовое приложение теперь будет лежать в папке

```
android/app/build/outputs/apk/release/app-release-unsigned.apk
```

Дальнейшие действия лучше выполнять из корневой папки проекта

```
cd ..
```

Создаем ключ для подписи

```
keytool -genkey -v -keystore MY_RELEASE_KEY.jks -keyalg RSA -keysize 2048 -validity 10000 -alias MY_KEY_ALIAS

```

Запишите созданные пароли и alias, так как они понадобятся вам в дальнейшем.

Создаем копию приложения

```
cp android/app/build/outputs/apk/release/app-release-unsigned.apk android/app/build/outputs/apk/release/app-release.apk
```

Подписываем приложение

```
apksigner sign --ks MY_RELEASE_KEY.jks --ks-key-alias MY_KEY_ALIAS --ks-pass pass:YOUR_KEYSTORE_PASSWORD --key-pass pass:YOUR_KEY_PASSWORD android/app/build/outputs/apk/release/app-release.apk
```

Можно проверить подпись

```
apksigner verify android/app/build/outputs/apk/release/app-release.apk
```

Если APK подписан правильно, вы не увидите никаких ошибок.

# Phaser

Проект создан на основе

**[This Template is also available as a JavaScript version.](https://github.com/phaserjs/template-vite)**

**Visit:** The [Phaser website](https://phaser.io) and follow on [Phaser Twitter](https://twitter.com/phaser_)<br />
**Play:** Some of the amazing games [#madewithphaser](https://twitter.com/search?q=%23madewithphaser&src=typed_query&f=live)<br />
**Learn:** [API Docs](https://newdocs.phaser.io), [Support Forum](https://phaser.discourse.group/) and [StackOverflow](https://stackoverflow.com/questions/tagged/phaser-framework)<br />
**Discord:** Join us on [Discord](https://discord.gg/phaser)<br />
**Code:** 2000+ [Examples](https://labs.phaser.io)<br />
**Read:** The [Phaser World](https://phaser.io/community/newsletter) Newsletter<br />

Created by [Phaser Studio](mailto:support@phaser.io). Powered by coffee, anime, pixels and love.

The Phaser logo and characters are &copy; 2011 - 2025 Phaser Studio Inc.

All rights reserved.
