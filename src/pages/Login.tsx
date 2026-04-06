import { IonPage, IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonContent, IonButton, useIonRouter } from "@ionic/react";

const Login: React.FC = () => {
    const navigation = useIonRouter();

    const dologin = () => {
        navigation.push('/app', 'forward', 'replace');
    }
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Login</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <IonButton expand="full" onClick={() => dologin()}>
                    Login
                </IonButton>


            </IonContent>
        </IonPage>
    );
}
export default Login;