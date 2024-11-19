import React, { useState } from 'react';
import { IonContent, IonInput, IonButton, IonList, IonItem, IonLabel } from '@ionic/react';
import './PrimerComponente.css';

export default function PrimerComponente() {
  let email = "alumno@alumno.com";

  const dias_semana = [
    "Lunes",
    "Martes",
    "Miércoles",
    "Jueves",
    "Viernes",
    "Sábado",
    "Domingo",
  ];

  const [nombre, setNombre] = useState('');
  const [updated, setUpdated] = useState();

  function nombreOnChange(event) {
    setNombre(event.target.value);
  }

  function buttonOnClick() {
    setUpdated(nombre);
  }

  return (
    /*
    1. He reemplazado el div por el componente contenedor de Ionic: IonContent

    2. He reempplazado el elemento <ul><li>BLA BLA BLA</li></ul>
        Por el componente de Ionic: <IonList><IonItem><IonLabel>BLA BLA BLA</IonLabel></IonItem></IonList>

    3. He sustituido el input por el IonInput de Ionic

    4. He sustituido el button por el IonButton de Ionic
    */
    <IonContent>
      <h1>Esta es la llamada al primer componente</h1>

      <IonList>
        {dias_semana.map((value, index) => (
          <IonItem key={index}>
            <IonLabel>{value}</IonLabel>
          </IonItem>
        ))}
      </IonList>

      <p>
        Mi nombre en tiempo real es:{' '}
        <strong className={nombre.length < 4 ? 'verde' : 'rojo'}> {nombre} </strong>
      </p>
      <p>El nombre aplicado es: <strong>{updated}</strong></p>
      <p>Mi correo es: <strong>{email}</strong></p>

      <IonInput
        placeholder="Escribe tu nombre"
        value={nombre}
        onIonChange={nombreOnChange}
      ></IonInput>
      
      <IonButton onClick={buttonOnClick}>Actualizar nombre</IonButton>
    </IonContent>
  );
}
