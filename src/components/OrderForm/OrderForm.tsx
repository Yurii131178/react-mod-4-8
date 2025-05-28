//MODULE 4 / 8 FORMIK
/**Елементи форми
Formik надає набір готових компонентів, які полегшують створення форм у React. Він бере на себе управління станом полів, валідацію, обробку сабміту тощо.

Компонент Formik

Починаємо побудову форми з компонента-контейнера Formik, який керує всією логікою форми. */
//.....................................................
// import { Formik } from 'formik';

// export default function OrderForm() {
//   return (
//     <Formik initialValues={{}} onSubmit={() => {}}>
//       {/* Далі йдуть елементи форми */}
//     </Formik>
//   );
// }
//.....................................................
/**Обов’язкові пропси:

initialValues – об’єкт початкових значень полів.
onSubmit – функція, яка викликається при сабміті форми.
Будемо заповнювати значення цих пропсів поступово з додаванням елементів форми.

Компонент Form

Formik надає компонент Form, який рендериться у HTML як <form> і автоматично підключає обробник сабміту. */
//.................................
// import { Formik, Form } from 'formik';

// export default function OrderForm() {
//   return (
//     <Formik initialValues={{}} onSubmit={() => {}}>
//       <Form>
//         {/* Поля */}
//         <button type="submit">Place order</button>
//       </Form>
//     </Formik>
//   );
// }
//...........................................................
/**Компонент Field

Компонент Field – це обгортка над input, textarea або select. Він автоматично слідкує за значенням поля та відстежує дії користувача. Кожному полю обов'язково потрібно вказати type та name. */
//.......................................
// import { Formik, Form, Field } from 'formik';

// export default function OrderForm() {
//   return (
//     <Formik initialValues={{}} onSubmit={() => {}}>
//       <Form>
//         <Field type="text" name="username" />
//         <Field type="email" name="email" />
//         <button type="submit"></button>
//       </Form>
//     </Formik>
//   );
// }
//.................................................................
// Обов’язково вказуйте name, інакше Formik не зможе відстежити це поле. Компонент Field пов'язує поля форми і внутрішню логіку бібліотеки, яка зберігається в компоненті Formik.

// ======================Розмітка форми===========================//

// Formik не має компонентів label, fieldset, legend, тож використовуємо звичайні HTML-теги. Щоб пов’язати label із полем – додаємо атрибут htmlFor та id. Для цього зручно використати useId.

//...........................................................................
// import { useId } from 'react';
// import { Formik, Form, Field } from 'formik';

// export default function OrderForm() {
//   const fieldId = useId();

//   return (
//     <Formik initialValues={{}} onSubmit={() => {}}>
//       <Form>
//         <fieldset>
//           <legend>Client Info</legend>

//           <label htmlFor={`${fieldId}-username`}>Name</label>
//           <Field type="text" name="username" id={`${fieldId}-username`} />

//           <label htmlFor={`${fieldId}-email`}>Email</label>
//           <Field type="email" name="email" id={`${fieldId}-email`} />
//         </fieldset>

//         <button type="submit">Place order</button>
//       </Form>
//     </Formik>
//   );
// }
//...........................................................

/**================================Стилізація===============================

Formik-компоненти, які рендерять HTML-елементи (Form, Field) – можна стилізувати напряму через className. Formik як компонент – не рендерить жодного HTML-елемента, тому стилізація його не стосується. */
//...............................................

// import { useId } from 'react';
// import { Formik, Form, Field } from 'formik';
// import css from './OrderForm.module.css';

// export default function OrderForm() {
//   const fieldId = useId();

//   return (
//     <Formik initialValues={{}} onSubmit={() => {}}>
//       <Form className={css.form}>
//         <fieldset className={css.fieldset}>
//           <legend className={css.legend}>Client Info</legend>

//           <label className={css.label} htmlFor={`${fieldId}-username`}>
//             Name
//           </label>
//           <Field
//             className={css.field}
//             type="text"
//             name="username"
//             id={`${fieldId}-username`}
//           />

//           <label className={css.label} htmlFor={`${fieldId}-email`}>
//             Email
//           </label>
//           <Field
//             className={css.field}
//             type="email"
//             name="email"
//             id={`${fieldId}-email`}
//           />
//         </fieldset>

//         <button className={css.btn} type="submit">
//           Place order
//         </button>
//       </Form>
//     </Formik>
//   );
// }

//.......................................................................
/**------------------Початкові значення полів--------------------//
Formik автоматично керує значеннями полів, зберігаючи їх у своєму внутрішньому стані – достатньо правильно передати initialValues.

Значення пропса initialValues – це об'єкт, у якому кожен ключ – це назва поля (name), а кожне значення – початкове значення цього поля. Ключі в initialValues мають точно відповідати значенням атрибутів name у відповідних Field.
 */
// import { Formik, Form, Field } from 'formik';

// export default function OrderForm() {
//   return (
//     <Formik
//       initialValues={{
//         username: 'your name',
//         email: '@',
//       }}
//       onSubmit={() => {}}
//     >
//       <Form>
//         <Field type="text" name="username" />
//         <Field type="email" name="email" />
//         <button type="submit">Place order</button>
//       </Form>
//     </Formik>
//   );
// }
//......................................................
/**---------------Типізація початкових значень-------------------

Щоб уникнути помилок і отримати підказки в редакторі, важливо типізувати початкові значення форми.

Спочатку створюємо інтерфейс, який описує об’єкт початкових значень:

interface OrderFormValues {
  username: string;
  email: string;
}

Виносимо об’єкт початкових значень у зовнішню змінну і типізуємо. */
//.....................................................................
// import { Formik, Form, Field } from 'formik';

// interface OrderFormValues {
//   username: string;
//   email: string;
// }

// const initialValues: OrderFormValues = {
//   username: 'Mike',
//   email: 'mike@mail',
// };

// export default function OrderForm() {
//   return (
//     <Formik<OrderFormValues> initialValues={initialValues} onSubmit={() => {}}>
//       <Form>
//         <Field type="text" name="username" />
//         <Field type="email" name="email" />
//         <button type="submit">Place order</button>
//       </Form>
//     </Formik>
//   );
// }
//................................................................
//✅🧠 Formik сам "виведе" тип OrderFormValues з initialValues, тому додатковий generic не потрібен. Але якщо ви хочете, можете вказати тип явно – для кращої читабельності.
//..............................................................
//-----------------------------Відправка форми--------------------------
// Formik самостійно обробляє відправку форми та збирає значення полів. При відправці форми викликається колбек-функція, яку ми передаємо пропсом onSubmit до компонента Formik. Найкраща практика – створити окрему іменовану функцію handleSubmit і передати її як значення пропса.

// Імпортуємо вбудований тип FormikHelpers
// import { Formik, Form, Field, FormikHelpers } from 'formik';

// interface OrderFormValues {
//   username: string;
//   email: string;
// }

// const initialValues: OrderFormValues = {
//   username: '',
//   email: '',
// };

// export default function OrderForm() {
//   const handleSubmit = (
//     values: OrderFormValues,
//     actions: FormikHelpers<OrderFormValues>
//   ) => {
//     console.log('Order data:', values);
//     actions.resetForm();
//   };

//   return (
//     <Formik initialValues={initialValues} onSubmit={handleSubmit}>
//       <Form>
//         <Field type="text" name="username" />
//         <Field type="email" name="email" />
//         <button type="submit">Place order</button>
//       </Form>
//     </Formik>
//   );
// }
/**Функція handleSubmit має два параметри:

values – це об’єкт зі значеннями всіх полів форми, типізований як FeedbackFormValues.
actions – набір методів, які надає Formik для керування формою. Один із найчастіше вживаних – resetForm, який скидає значення форми до початкових (initialValues). Тип FormikHelpers<T> вже включений у бібліотеку.


🧠 Як і у випадку з form action, Formik автоматично скасовує стандартну поведінку HTML-форми (перезавантаження сторінки) та збирає значення елементів. Ви отримуєте дані зручною структурою – у вигляді об'єкта values. */
//........................................
// import { useId } from 'react';
// import { Formik, Form, Field, FormikHelpers } from 'formik';
// import css from './OrderForm.module.css';

// interface OrderFormValues {
//   username: string;
//   email: string;
// }

// const initialValues: OrderFormValues = {
//   username: 'Jacob',
//   email: 'j.mercer@mail.com',
// };

// export default function OrderForm() {
//   const fieldId = useId();

//   const handleSubmit = (
//     values: OrderFormValues,
//     actions: FormikHelpers<OrderFormValues>
//   ) => {
//     console.log('Order data:', values);
//     actions.resetForm();
//   };

//   return (
//     <Formik initialValues={initialValues} onSubmit={handleSubmit}>
//       <Form className={css.form}>
//         <fieldset className={css.fieldset}>
//           <legend className={css.legend}>Client Info</legend>

//           <label className={css.label} htmlFor={`${fieldId}-username`}>
//             Name
//           </label>
//           <Field
//             className={css.field}
//             type="text"
//             name="username"
//             id={`${fieldId}-username`}
//           />

//           <label className={css.label} htmlFor={`${fieldId}-email`}>
//             Email
//           </label>
//           <Field
//             className={css.field}
//             type="email"
//             name="email"
//             id={`${fieldId}-email`}
//           />
//         </fieldset>

//         <button className={css.btn} type="submit">
//           Place order
//         </button>
//       </Form>
//     </Formik>
//   );
// }

//.........................................
/**--------------------------Типи полів-------------------------
За замовчуванням компонент Field рендерить звичайний тег <input>. Але іноді потрібно інший тип поля – наприклад, радіокнопки, чекбокси, селект чи багаторядкове текстове поле (textarea).

Щоб змінити HTML-елемент, потрібно передати проп as="назва_тега" компоненту Field.

==============Селект===================
Щоб створити випадаючий список (select), використовується Field з пропом as="select". Опції вказуються звичайними HTML-тегами <option>. */
//.........................
// import { useId } from 'react';
// import { Formik, Form, Field, FormikHelpers } from 'formik';

// interface OrderFormValues {
//   username: string;
//   email: string;
//   deliveryTime: string;
// }

// const initialValues: OrderFormValues = {
//   username: '',
//   email: '',
//   deliveryTime: '',
// };

// export default function OrderForm() {
//   const fieldId = useId();

//   const handleSubmit = (
//     values: OrderFormValues,
//     actions: FormikHelpers<OrderFormValues>
//   ) => {
//     console.log(values);
//     actions.resetForm();
//   };

//   return (
//     <Formik initialValues={initialValues} onSubmit={handleSubmit}>
//       <Form>
//         <Field type="text" name="username" />
//         <Field type="email" name="email" />

//         <label htmlFor={`${fieldId}-deliveryTime`}>
//           Preferred delivery time
//         </label>
//         <Field as="select" name="deliveryTime" id={`${fieldId}-deliveryTime`}>
//           <option value="">-- Choose delivery time --</option>
//           <option value="morning">Morning (8:00–12:00)</option>
//           <option value="afternoon">Afternoon (12:00–16:00)</option>
//           <option value="evening">Evening (16:00–20:00)</option>
//         </Field>

//         <button type="submit">Place order</button>
//       </Form>
//     </Formik>
//   );
// }
//.................................
/**Ми додали поле deliveryTime, яке дозволяє вибрати час доставки:

Використали Field as="select"
Додали відповідний name
Додали до initialValues значення за замовчуванням
Не забули оновити тип

🧠 Початкове значення для deliveryTime в initialValues має відповідати одному з value в <option>.


-------------Радіокнопки-----------------

Щоб додати радіокнопки, використовуйте Field з однаковим name, але різними value.

Всі кнопки в групі повинні мати однакове значення name.
Кожна кнопка має свій value.
Початкове значення задається через initialValues.
 */
//..................................
// import { Formik, Form, Field, FormikHelpers } from 'formik';

// interface OrderFormValues {
//   delivery: string;
// }

// const initialValues: OrderFormValues = {
//   delivery: 'pickup',
// };

// export default function OrderForm() {
//   const handleSubmit = (
//     values: OrderFormValues,
//     actions: FormikHelpers<OrderFormValues>
//   ) => {
//     console.log(values);
//     actions.resetForm();
//   };

//   return (
//     <Formik initialValues={initialValues} onSubmit={handleSubmit}>
//       <Form>
//         <label>
//           <Field type="radio" name="delivery" value="pickup" />
//           Pickup
//         </label>
//         <label>
//           <Field type="radio" name="delivery" value="courier" />
//           Courier
//         </label>
//         <label>
//           <Field type="radio" name="delivery" value="drone" />
//           Drone delivery
//         </label>

//         <button type="submit">Place order</button>
//       </Form>
//     </Formik>
//   );
// }

//.................................

/**---------------Чекбокси------------------------

Для декількох чекбоксів з одним ім’ям, Formik зберігає значення у масиві.

Всі Field мають однакове ім’я name.
Кожен Field має різний value.
Початкове значення в initialValues – масив рядків. */
//....................................
// import { Formik, Form, Field, FormikHelpers } from 'formik';

// interface OrderFormValues {
//   restrictions: string[];
// }

// const initialValues: OrderFormValues = {
//   restrictions: [],
// };

// export default function OrderForm() {
//   const handleSubmit = (
//     values: OrderFormValues,
//     actions: FormikHelpers<OrderFormValues>
//   ) => {
//     console.log(values);
//     actions.resetForm();
//   };

//   return (
//     <Formik initialValues={initialValues} onSubmit={handleSubmit}>
//       <Form>
//         <label>
//           <Field type="checkbox" name="restrictions" value="vegan" />
//           Vegan
//         </label>
//         <label>
//           <Field type="checkbox" name="restrictions" value="gluten-free" />
//           Gluten-free
//         </label>
//         <label>
//           <Field type="checkbox" name="restrictions" value="nut-free" />
//           Nut-free
//         </label>

//         <button type="submit">Place order</button>
//       </Form>
//     </Formik>
//   );
// }
//.......................................
/**-------------Елемент textarea----------------

Для довільного тексту (наприклад, коментар або опис) використовують поле textarea. Воно створюється через Field as="textarea".

 */
//✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅
import { useId } from 'react';
import { Formik, Form, Field, FormikHelpers } from 'formik';
import css from './OrderForm.module.css';

interface OrderFormValues {
  username: string;
  email: string;
  delivery: string;
  deliveryTime: string;
  restrictions: string[];
  message: string;
}

const initialValues: OrderFormValues = {
  username: '',
  email: '',
  delivery: 'pickup',
  deliveryTime: '',
  restrictions: [],
  message: '',
};

export default function OrderForm() {
  const fieldId = useId();

  const handleSubmit = (
    values: OrderFormValues,
    actions: FormikHelpers<OrderFormValues>
  ) => {
    console.log('Submitted order:', values);
    actions.resetForm();
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form className={css.form}>
        <fieldset className={css.fieldset}>
          <legend className={css.legend}>Client Info</legend>

          <label htmlFor={`${fieldId}-username`} className={css.label}>
            Name
          </label>
          <Field
            type="text"
            name="username"
            id={`${fieldId}-username`}
            className={css.input}
          />

          <label htmlFor={`${fieldId}-email`} className={css.label}>
            Email
          </label>
          <Field
            type="email"
            name="email"
            id={`${fieldId}-email`}
            className={css.input}
          />
        </fieldset>

        <fieldset className={css.fieldset}>
          <legend className={css.legend}>Delivery method</legend>

          <label className={css.option}>
            <Field type="radio" name="delivery" value="pickup" />
            Pickup
          </label>
          <label className={css.option}>
            <Field type="radio" name="delivery" value="courier" />
            Courier
          </label>
          <label className={css.option}>
            <Field type="radio" name="delivery" value="drone" />
            Drone delivery
          </label>
        </fieldset>

        <fieldset className={css.fieldset}>
          <legend className={css.legend}>Dietary restrictions</legend>

          <label className={css.option}>
            <Field type="checkbox" name="restrictions" value="vegan" />
            Vegan
          </label>
          <label className={css.option}>
            <Field type="checkbox" name="restrictions" value="gluten-free" />
            Gluten-free
          </label>
          <label className={css.option}>
            <Field type="checkbox" name="restrictions" value="nut-free" />
            Nut-free
          </label>
        </fieldset>

        <label htmlFor={`${fieldId}-deliveryTime`} className={css.label}>
          Preferred delivery time
        </label>
        <Field
          as="select"
          name="deliveryTime"
          id={`${fieldId}-deliveryTime`}
          className={css.input}
        >
          <option value="">-- Choose delivery time --</option>
          <option value="morning">Morning (8:00–12:00)</option>
          <option value="afternoon">Afternoon (12:00–16:00)</option>
          <option value="evening">Evening (16:00–20:00)</option>
        </Field>

        <label htmlFor={`${fieldId}-message`} className={css.label}>
          Additional message
        </label>
        <Field
          as="textarea"
          name="message"
          rows={4}
          id={`${fieldId}-message`}
          className={css.textarea}
        />

        <button type="submit" className={css.button}>
          Place order
        </button>
      </Form>
    </Formik>
  );
}

//✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅
