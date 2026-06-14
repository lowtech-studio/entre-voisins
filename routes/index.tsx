import { define } from "@/utils.ts";
import "@/assets/home.css";

export default define.page(function Home(ctx) {
  return (
    <main class="intro">
      <h1>PARTAGER ENTRE VOISINS</h1>
      <h2>Partagez, échangez et connectez-vous avec vos voisins! 100% Local, 100% Réel</h2>
      <p>"Un dentiste à conseiller? Un outil à prêter? Un événement de quartier à partager? EntreVoisins est votre plateforme de confiance pour tout cela et plus encore."</p>
      <section class="signup-or-login">
        <button class="large">S&apos;inscrire</button>
        <button class="large" commandfor="login-form" command="show-modal">Se Connecter</button>
        <dialog id="login-form">
          <form method="dialog">
            <header>
              <h3>Je me connecte</h3>
            </header>
            <div class="vstack">
              <label>E-mail <input name="email" type="email" required /></label>
              <label>Mot de passe <input name="password" type="password" required /></label>
            </div>
            <footer>
              <button type="button" commandfor="login-form" command="close" class="outline">Annuler</button>
              <button value="save">Login</button>
            </footer>
          </form>
        </dialog>
      </section>
      <section class="share-with-neighbors">
        <button class="large">Inviter des voisins</button>
      </section>
      <p><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/></p>
    </main>
  );
});
