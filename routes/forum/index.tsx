import { define } from "@/utils.ts";
import "@/assets/forum.css";

export default define.page(() => {
  return (
    <div class="forum">
      <div data-sidebar-layout>
        <aside data-sidebar>
          <nav>
            <ul>
              <li><a href="#sidebar" aria-current="page">#General</a></li>
              <li><a href="#sidebar">#Evenements</a></li>
              <li><a href="#sidebar">#Voisins vigilants</a></li>
              <li><a href="#sidebar">#Donnez, Louez, Prêtez, Vendez</a></li>
              <li><a href="#sidebar">#Commerces et Services</a></li>
              <li><a href="#sidebar">#Loisirs et Passions</a></li>
            </ul>
          </nav>
          <footer>
            <button class="outline" class="sm" style="width: 100%;">
              <figure data-variant="avatar" aria-label="Oat">
                  <abbr title="Jane Doe">FB</abbr>
              </figure>
              Fernando
            </button>
          </footer>
        </aside>
        <main>
          <header>
            <h2># general</h2>
            <span>Parlez de tout et de rien</span>
          </header>
          <div class="posts">
            <div class="post">
              <figure data-variant="avatar" class="small" aria-label="Jane Doe">
                  JV
              </figure>
              <div>
                <div class="post-metadata">
                  <span class="post-metadata-author">Julian V.</span>
                  <span class="post-metadata-date">Today at 11:05 AM</span>
                </div>
                <div class="post-message">
                    Looking great, Marcus! I particularly like how you've handled the <span>tonal layers</span> instead of heavy borders. It makes the whole interface feel much more organic.
                </div>
              </div>
            </div>
            <div class="post">
              <figure data-variant="avatar" class="small" aria-label="Jane Doe">
                  FDB
              </figure>
              <div>
                <div class="post-metadata">
                  <span class="post-metadata-author">Fernando DBC.</span>
                  <span class="post-metadata-date">Today at 11:28 AM</span>
                </div>
                <div class="post-message">
                    Je cherche quelqu'un pour garder mon chien (Volt) lundi prochain.
                </div>
              </div>
            </div>
            <div class="post">
              <figure data-variant="avatar" class="small" aria-label="Jane Doe">
                  JV
              </figure>
              <div>
                <div class="post-metadata">
                  <span class="post-metadata-author">Julian V.</span>
                  <span class="post-metadata-date">Today at 11:05 AM</span>
                </div>
                <div class="post-message">
                    Looking great, Marcus! I particularly like how you've handled the <span>tonal layers</span> instead of heavy borders. It makes the whole interface feel much more organic.
                </div>
              </div>
            </div>
            <div class="post">
              <figure data-variant="avatar" class="small" aria-label="Jane Doe">
                  FDB
              </figure>
              <div>
                <div class="post-metadata">
                  <span class="post-metadata-author">Fernando DBC.</span>
                  <span class="post-metadata-date">Today at 11:28 AM</span>
                </div>
                <div class="post-message">
                    Je cherche quelqu'un pour garder mon chien (Volt) lundi prochain.
                </div>
              </div>
            </div>
            <div class="post">
              <figure data-variant="avatar" class="small" aria-label="Jane Doe">
                  JV
              </figure>
              <div>
                <div class="post-metadata">
                  <span class="post-metadata-author">Julian V.</span>
                  <span class="post-metadata-date">Today at 11:05 AM</span>
                </div>
                <div class="post-message">
                    Looking great, Marcus! I particularly like how you've handled the <span>tonal layers</span> instead of heavy borders. It makes the whole interface feel much more organic.
                </div>
              </div>
            </div>
            <div class="post">
              <figure data-variant="avatar" class="small" aria-label="Jane Doe">
                  FDB
              </figure>
              <div>
                <div class="post-metadata">
                  <span class="post-metadata-author">Fernando DBC.</span>
                  <span class="post-metadata-date">Today at 11:28 AM</span>
                </div>
                <div class="post-message">
                    Je cherche quelqu'un pour garder mon chien (Volt) lundi prochain.
                </div>
              </div>
            </div>
          </div>
          <div class="post-box">
            <div class="bg-surface-container rounded-2xl p-2 flex items-center space-x-3 focus-within:ring-2 focus-within:ring-outline-variant/30 transition-shadow">
              <div class="p-2 hover:bg-surface-container-high rounded-lg cursor-pointer text-on-surface-variant transition-colors">
                <span class="material-symbols-outlined">+</span>
              </div>
              <input class="flex-1 bg-transparent border-none focus:ring-0 text-message-body font-message-body text-on-surface placeholder:text-on-surface-variant/50" placeholder="Message #general" type="text" />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
});