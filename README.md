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

Готовое приложение будет лежать в каталоге

```
out/template-vite-ts-win32-x64/template-vite-ts.exe
```

## Подготовка к сборке под мобильные устройства

Сборку делаем через capacitor. Полностью все происходит в несколько шагов.

Для настройки отредактируйте файл

```
capacitor.config.ts
```

Добавляем мобильное устройство. Это нужно сделать один раз после развертывания проекта.

```
yarn cap add android
```

Созданный каталог android содержит множество настроек приложения, которые хотелось бы сохранить в репозитории. Но он также содержит много временных файлов и копии проекта и поэтому получается слишком большим.

Мы создали другой каталог app, где вы можете хранить все настройки и ресурсы для сборки.

Перед сборкой вам просто нужно скопировать его содержимое

```
cp -rf app/android/* android/app/src/main
```

или

```
xcopy app\android\* android\app\src\main /E /H /C /I /Y
```

Выполняем предварительную сборку

```
yarn build
```

Копируем собранный проект для следующего этапа

```
yarn cap copy
```

## Билд под мобильные устройства

Для дальнейшей сборки под android лучше всего работать в контейнере nodejs из проекта https://github.com/isengine/server.git

Перейдем в каталог

```
cd android
```

Билд в режиме дебаг:

```
./gradlew assembleDebug
```

Готовое приложение будет лежать в каталоге

```
android/app/build/outputs/apk/debug/app-debug.apk
```

Билд в продакшн:

```
./gradlew assembleRelease
```

Готовое приложение теперь будет лежать в каталоге

```
android/app/build/outputs/apk/release/app-release-unsigned.apk
```

Дальнейшие действия лучше выполнять из корневого каталога проекта

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

# Правила разработки

Каждая сущность имеет свою структуру

```
entities
|
|_datasets
| |_ some.dataset.ts
|
|_helpers
| |_ some.helper.ts
|
|_interfaces
| |_ some.interface.ts
|
|_models
| |_ some.model.ts
|
|_services
| |_ some.service.ts
|
|_templates
| |_ some.template.ts
|
|_ some.entity.ts
```

## Datasets

Это наборы различных данных различных типов:

- пары ключ/значение,
- массивы,
- коллекции.

Пример работы с коллекциями

1. Создание Map:

```
const map = new Map<number, string>();
```

2. Добавление элементов:

```
map.set(1, 'Value 1');
map.set(2, 'Value 2');
```

3. Получение значения по ключу:

```
const value = map.get(1); // 'Value 1'
```

4. Проверка наличия ключа:

```
const hasKey = map.has(1); // true
```

5. Удаление элемента:

```
map.delete(2);
```

6. Получение размера Map:

```
const size = map.size; // количество элементов в Map
```

7. Очистка Map:

```
```
map.clear(); // удаляет все элементы

8. Итерация по элементам:

```
for (let [key, value] of map) {
    console.log(key, value);
}
```

## Helpers

Хелперы - это вспомогательные функции, которые используются в сущностях и моделях.

Например:

- конвертер латинских букв в кириллицу и наоборот, если слово было напечатано в неправильной кодировке.

## Interfaces

Интерфейсы используются для описания взаимодействия с сущностями и моделями. Поэтому содержат только открытые свойства и методы.

## Models

Модели - это отдельные небольшие классы, которые являются вспомогательными для сущностей. Содержат бизнес-логику. Встраиваются в сущности по принципу композиции.

Например:

- класс создания DOM-объекта для секции,
- класс создания контейнера для секции.

## Services

Сервисы - это служебные классы для выполнения определенных задач. Используются для выполнения определенных задач и предоставляют общие методы для работы с данными.

Например:

- доступ к базе данных,
- работа с файловой системой,
- работа с внешними серверными приложениями по API.

## Templates

Шаблоны - это базовые классы для построения сущностей. Имплементируют интерфейсы. Описывают открытые и защищенные свойства, общие для всех экземпляров сущности. Разрешается также использовать конструктор базового типа.

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
