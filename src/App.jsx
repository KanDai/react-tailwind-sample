export default function App() {
  return (
    <>
      <header className="fixed top-0 flex h-16 justify-between">
        <div>
          <h1>
            <a href=".">
              <img src="img/logo.svg" alt="PON DESIGN" />
            </a>
          </h1>
        </div>
        <div>
          <nav>
            <ul>
              <li>
                <a href="news.html">news</a>
              </li>
              <li>
                <a href="service.html">service</a>
              </li>
              <li>
                <a href="works.html">works</a>
              </li>
              <li>
                <a href="company.html">company</a>
              </li>
              <li>
                <a href="recruit.html">recruit</a>
              </li>
              <li>
                <a href="contact.html">contact</a>
              </li>
            </ul>
          </nav>
        </div>
        <button type="button">
          <span></span>
        </button>
      </header>

      <div className="relative h-[100vh] bg-[url('img/hero.jpg')] bg-cover bg-center">
        <div className="flex h-full flex-col items-center justify-center text-white">
          <div>
            <div className="text-4xl font-bold">WEB DESIGN SPECIALIST</div>
            <div>
              お客様の夢を叶える
              <br />
              Webサイトを制作
            </div>
          </div>
          <div>
            <a
              href="contact.html"
              className="relative top-1/2 mt-8 inline-block min-w-[140px] -translate-y-1/2 rounded-full border border-white px-6 py-3 transition duration-300 ease-in-out after:absolute after:right-4 after:content-['>'] hover:bg-white hover:text-black"
            >
              contact
            </a>
          </div>
        </div>
        <span className="absolute bottom-4 right-4 text-white [writing-mode:vertical-rl] after:block after:h-12 after:w-[1px] after:animate-scroll-down-line after:bg-white after:content-['']">
          SCROLL
        </span>
      </div>

      <main>
        <section>
          <div>
            <div>
              <h2 className="flex flex-col text-center text-xl md:text-9xl">
                news<span className="text-xs">お知らせ</span>
              </h2>
            </div>
            <div>
              <div>
                <ul>
                  {['', '', ''].map((_, i) => (
                    <li key={i}>
                      <div>
                        <time dateTime="2020-02-01">2030.02.01</time>
                        <div>
                          <span>お知らせ</span>
                        </div>
                      </div>
                      <div>
                        <a href="news-article.html">
                          Webデザインニュースサイト「ウェブマガジン」に取材いただきました
                        </a>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div>
            <div>
              <h2>
                service<span>事業内容</span>
              </h2>
            </div>
            <div>
              <div>
                <div>
                  <div>
                    <img src="img/service01.jpg" alt="" />
                  </div>
                  <div>
                    <div>Webサイト制作</div>
                    <div>
                      <p>
                        新規サイトの制作はもちろんサイトリニューアルやランディングページの制作も可能です。
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <div>
                    <img src="img/service02.jpg" alt="" />
                  </div>
                  <div>
                    <div>Webサイト運用</div>
                    <div>
                      <p>
                        サイトの更新作業や独自のアクセス解析に基づいたサイト改善のご提案をいたします。
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <div>
                    <img src=" img/service03.jpg" alt="" />
                  </div>
                  <div>
                    <div>アプリ開発</div>
                    <div>
                      <p>
                        スマートフォンアプリ開発の他、Vue.jsやReactによるWebアプリの開発が可能です。
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <a href="service.html">more</a>
            </div>
          </div>
        </section>

        <section>
          <div>
            <div>
              <div>
                <div>
                  <div>
                    <img src="img/works/smoothiesta.jpg" alt="" />
                  </div>
                  <div>
                    <img src="img/works/web-conference.jpg" alt="" />
                  </div>
                  <div>
                    <img src="img/works/lamina.jpg" alt="" />
                  </div>
                </div>
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>
            <div>
              <div>
                <h2>
                  works<span>制作実績</span>
                </h2>
              </div>
              <div>
                <div>
                  <p>
                    様々なジャンルのWebサイト制作が可能です。
                    <br />
                    ご購入やお申込み数の増加などを実現します！
                  </p>
                </div>
              </div>
              <div>
                <a href="works.html">more</a>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div>
            <div>
              <h2>
                company<span>私たちについて</span>
              </h2>
            </div>
            <div>
              <div>
                <div>
                  <span>
                    サイトのゴール =
                    <br />
                    夢を叶えること
                  </span>
                </div>
                <div>
                  <p>
                    お客様の夢を叶えること。
                    <br />
                    それがWebサイトのゴールであり、
                    <br />
                    私たちが目指すことです。
                    <br />
                    だからこそちゃんと成果を出すサイトを
                    <br />
                    全力でお作りします。
                    <br />
                    お客様の笑顔を見たい。
                    <br />
                    夢を実現する手助けをさせてください。
                  </p>
                </div>
              </div>
            </div>
            <div>
              <a href="company.html">more</a>
            </div>
          </div>
        </section>

        <section>
          <div>
            <div>
              <div>
                <div>
                  <h2>
                    recruit<span>採用情報</span>
                  </h2>
                </div>
                <div>
                  <div>
                    <p>私たちと一緒に働きませんか？</p>
                  </div>
                </div>
                <div>
                  <a href="recruit.html">more</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div>
            <div>
              <h2>
                contact<span>お問い合わせ</span>
              </h2>
            </div>
            <div>
              <div>
                <p>
                  Webサイトの制作のご依頼やお見積りなど、
                  <br />
                  お気軽にご相談ください。
                </p>
              </div>
            </div>
            <div>
              <a href="contact.html">more</a>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <nav>
          <ul>
            <li>
              <a>HOME</a>
            </li>
            <li>
              <a>news</a>
            </li>
            <li>
              <a>service</a>
            </li>
            <li>
              <a>works</a>
            </li>
            <li>
              <a>company</a>
            </li>
            <li>
              <a>recruit</a>
            </li>
            <li>
              <a>contact</a>
            </li>
          </ul>
        </nav>
        <div>
          <a href=".">&copy;PON DESIGN</a>
        </div>
      </footer>

      <div>
        <a href="#">
          <i></i>
        </a>
      </div>
    </>
  )
}
