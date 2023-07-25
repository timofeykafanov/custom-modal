// import AppExtensionsSDK from './node_modules/@pipedrive/app-extensions-sdk';

// const sdk = await new AppExtensionsSDK().initialize();

// async function initializeAndOpen() {
//   try {
//     const sdk = await new AppExtensionsSDK({ identifier: 'custom-modal' }).initialize();

//     const { status } = await sdk.execute(sdk.Command.OPEN_MODAL, {
//       type: sdk.Modal.CUSTOM_MODAL,
//       action_id: 'd020daac-718c-4e59-aa42-5b9ce8ce1061',
//       // data: {
//       //   item: 'xyz',
//       // },
//     });

//     // Ваш остальной код, который должен выполняться после успешного выполнения асинхронных операций
//   } catch (error) {
//     // Обработка ошибок, если что-то идет не так
//     console.error(error);
//   }
// }

// // Вызовите вашу асинхронную функцию
// initializeAndOpen();

// // Вызовите вашу асинхронную функцию
// myFunction();

// console.log(sdk)

// sdk.execute(/* ... */)
//   .then((data) => {
//     // handle data
//   })
//   .catch((err) => {
//     // handle error
//   });

// try {
//   const data = await sdk.execute(/* ... */);
// } catch (err) {
//   // handle error
// }

// sdk.listen(Event.CLOSE_CUSTOM_MODAL, () => {
//   // handle event
// });

// let sdk; // Объявляем переменную на уровне модуля

// async function initializeSDK() {
//   try {
//     sdk = await new AppExtensionsSDK({ identifier: 'custom-modal' }).initialize();
//     console.log(sdk);
//   } catch (error) {
//     console.error('Ошибка при инициализации SDK:', error);
//   }
// }

// async function openCustomModal() {
//   try {
//     const { status } = await sdk.execute(sdk.Command.OPEN_MODAL, {
//       type: sdk.Modal.CUSTOM_MODAL,
//       action_id: 'd020daac-718c-4e59-aa42-5b9ce8ce1061',
//       // data: {
//       //   item: 'xyz',
//       // },
//     });

//     // Обработка статуса, если это необходимо
//   } catch (error) {
//     console.error('Ошибка при выполнении команды:', error);
//   }
// }

// // Вызываем функцию для инициализации SDK
// initializeSDK();

// // Вызываем функцию для открытия кастомного модального окна
// openCustomModal();

// let sdk; // Объявляем переменную на уровне модуля

// async function initializeSDK() {
//   try {
//     sdk = await new AppExtensionsSDK({ identifier: 'd020daac-718c-4e59-aa42-5b9ce8ce1061' }).initialize();
//     console.log('SDK успешно инициализирован.');
//   } catch (error) {
//     console.error('Ошибка при инициализации SDK:', error);
//   }
// }

// async function openCustomModal() {
//   if (!sdk) {
//     console.error('SDK не был инициализирован. Пожалуйста, подождите инициализации SDK.');
//     return;
//   }

//   try {
//     const { status } = await sdk.execute(sdk.Command.OPEN_MODAL, {
//       type: sdk.Modal.CUSTOM_MODAL,
//       action_id: 'd020daac-718c-4e59-aa42-5b9ce8ce1061',
//       // data: {
//       //   item: 'xyz',
//       // },
//     });

//     // Обработка статуса, если это необходимо
//   } catch (error) {
//     console.error('Ошибка при выполнении команды:', error);
//   }
// }

// // Вызываем функцию для инициализации SDK
// initializeSDK();

// // Ждем некоторое время, чтобы дать SDK время на инициализацию (может быть необходимо в реальном приложении)
// setTimeout(() => {
//   // Вызываем функцию для открытия кастомного модального окна
//   openCustomModal();
// }, 2000); // Ждем 2 секунды (увеличьте или уменьшите значение, если это необходимо)

import { AppExtensionsSDK, Command, Modal } from '@pipedrive/app-extensions-sdk';

// Инициализируйте SDK
const sdk = new AppExtensionsSDK().initialize();

// Выполните команду для открытия custom modal с указанием URL вашей веб-страницы
const { status } = await sdk.execute(Command.OPEN_MODAL, {
  type: Modal.CUSTOM_MODAL,
  url: 'https://timofeykafanov.github.io/custom-modal/', // Замените на URL вашей веб-страницы
});

// Обработайте статус после закрытия модального окна, если необходимо
console.log('Modal closed with status:', status);