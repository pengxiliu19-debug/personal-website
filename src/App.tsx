import { useEffect, useRef, useState } from 'react'
import { ArrowUpRight, ArrowDown, ArrowRight, Code2, Sparkles, Menu, X, Download, Mail, Copy, Check, Disc3, MapPin, GraduationCap, ExternalLink, ChevronRight, WandSparkles, AudioLines, Braces, Globe, Trophy } from 'lucide-react'
import { profile, projects, type Category, type Project } from './data/portfolio'

const categories: Category[] = ['全部项目', 'AI 应用', '前端交互', 'AIGC 创作']

function Star({ className = '' }: { className?: string }) {
  return <svg className={className} viewBox="0 0 100 100" fill="currentColor" aria-hidden="true"><path d="m50 0 9 27 23-18-9 28 27 4-24 16 18 23-28-8-6 28-14-25-25 17 10-27-28-8 26-12L12 20l28 10Z" /></svg>
}

function ProjectArt({ id, compact = false }: { id: string; compact?: boolean }) {
  return <div className={`project-art art-${id} ${compact ? 'compact-art' : ''}`} aria-hidden="true">
    {id === 'music' && <>
      <span className="art-topline">MUSIC COMPANION HUB <Disc3 size={15} /></span>
      <div className="music-ui"><div className="album-label">YOUR DAILY<br /><b>GOOD VIBES.</b><span>AI RADIO / VOL. 01</span></div><div className="vinyl"><div className="vinyl-center"><Sparkles size={23} /></div></div><div className="player-line"><span>Somewhere, a new favorite.</span><div className="play-symbol">▶</div></div><div className="progress-track"><i /></div></div>
      <span className="music-note note-one">♪</span><span className="music-note note-two">♫</span>
    </>}
    {id === 'interview' && <>
      <span className="art-topline">YOUR NEXT CHAPTER <AudioLines size={18} /></span>
      <div className="interview-window"><div className="window-top"><span><i /><i /><i /></span><small>MOCK INTERVIEW</small></div><div className="interview-chat"><span className="ai-dot"><Sparkles size={18} /></span><p>聊聊你最有成就感的项目？</p></div><div className="waveform">{Array.from({ length: 30 }, (_, i) => <i key={i} style={{ height: `${12 + ((i * 17 + 9) % 38)}px` }} />)}</div><div className="answer-chip">正在组织下一个好想法 <span>•••</span></div></div>
      <div className="floating-tag">YOU GOT THIS! ↗</div>
    </>}
    {id === 'legal' && <>
      <span className="art-topline">KNOWLEDGE INTO CLARITY <Braces size={18} /></span>
      <div className="graph-lines"><svg viewBox="0 0 400 220"><path d="M200 110 75 45M200 110 325 45M200 110 70 175M200 110 330 175M75 45 70 175M325 45 330 175" /></svg><span className="graph-node node-a">法律条文</span><span className="graph-node node-b">知识检索</span><span className="graph-node node-c">相关判例</span><span className="graph-node node-d">工具调用</span><div className="graph-core"><Sparkles /><b>MCP</b></div></div><span className="graph-caption">CONNECT THE DOTS.</span>
    </>}
    {id === 'aigc' && <>
      <span className="art-topline">CULTURE × GENERATIVE ART <WandSparkles size={17} /></span>
      <div className="culture-orbit orbit-one" /><div className="culture-orbit orbit-two" /><div className="culture-title"><span>岭南</span><b>NEW<br />PERSPECTIVES.</b></div><span className="culture-seal">海上<br />丝路</span><span className="art-caption">TRADITION, REIMAGINED.</span>
    </>}
    {!compact && <span className="illustration-label">界面概念示意 · 非原项目截图</span>}
  </div>
}

export default function App() {
  const [filter, setFilter] = useState<Category>('全部项目')
  const [selected, setSelected] = useState<Project | null>(null)
  const [menuOpen, setMenuOpen] = useState(false)
  const [copied, setCopied] = useState(false)
  const [copyFailed, setCopyFailed] = useState(false)
  const dialog = useRef<HTMLDialogElement>(null)
  const resetTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined)
  const shown = projects.filter(project => filter === '全部项目' || project.category === filter)

  useEffect(() => {
    if (selected) { dialog.current?.showModal(); document.body.style.overflow = 'hidden' }
    else { dialog.current?.close(); document.body.style.overflow = '' }
    return () => { document.body.style.overflow = '' }
  }, [selected])
  useEffect(() => () => clearTimeout(resetTimer.current), [])
  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true); setCopyFailed(false)
      clearTimeout(resetTimer.current)
      resetTimer.current = setTimeout(() => setCopied(false), 2500)
    } catch { setCopyFailed(true) }
  }

  return <>
    <a className="skip-link" href="#main">跳到主要内容</a>
    <div className="marquee-bar" aria-label="前端开发、AI 产品、AIGC 创作">
      <div className="marquee-track" aria-hidden="true">{[0, 1, 2, 3].map(n => <span key={n}>OPEN TO POSSIBILITIES <b>✳</b> FRONTEND DEVELOPMENT <b>✳</b> AI PRODUCT EXPLORER <b>✳</b> ALWAYS MAKING THINGS <b>✳</b></span>)}</div>
    </div>
    <header className="header">
      <a className="brand" href="#" aria-label="刘鹏熙，回到首页">LPX<span>.</span>STUDIO<i>个人出品</i></a>
      <nav className={`navigation ${menuOpen ? 'mobile-open' : ''}`} aria-label="主导航">
        {[['#work', '项目作品', '01'], ['#about', '关于我', '02'], ['#journey', '成长经历', '03']].map(([href, label, number]) => <a key={href} href={href} onClick={() => setMenuOpen(false)}><sup>{number}</sup>{label}</a>)}
        <a className="mobile-contact" href="#contact" onClick={() => setMenuOpen(false)}>联系我 <ArrowUpRight size={16} /></a>
      </nav>
      <a className="header-contact" href="#contact">LET’S TALK <ArrowUpRight size={17} /></a>
      <button className="menu-button" aria-label={menuOpen ? '关闭导航' : '打开导航'} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
    </header>

    <main id="main">
      <section className="hero section-shell" aria-labelledby="hero-title">
        <div className="hero-copy">
          <div className="eyebrow"><span className="status-dot" /> HELLO, WORLD. 我是刘鹏熙</div>
          <h1 id="hero-title">IDEAS INTO<br /><span className="highlight">REAL THINGS<span className="headline-period">.</span></span></h1>
          <p className="hero-chinese">把想法，做成现实。<Sparkles size={25} /></p>
          <p className="hero-description">一名喜欢动手创造的人工智能专业学生。<br />关注前端开发与 AI 产品，也用 AIGC 探索创意的另一种可能。</p>
          <div className="hero-actions"><a className="button button-dark" href="#work">看看我的作品 <ArrowUpRight size={20} /></a><a className="button button-white" href={profile.resume} download="刘鹏熙_简历.pdf">下载简历 <Download size={17} /></a></div>
          <div className="hero-footnote"><div className="code-avatar"><Code2 size={25} /></div><div><b>逻辑在线，创意也在线。</b><span>FRONTEND / AI / A LITTLE BIT OF ART</span></div><ArrowDown size={18} /></div>
        </div>
        <div className="hero-collage">
          <div className="purple-shape" /><div className="dot-pattern" />
          <Star className="hero-star" />
          <div className="portrait-card"><div className="portrait-top"><span>THE PERSON BEHIND THE PIXELS</span><span>↗</span></div><img src={profile.portrait} alt="刘鹏熙的个人肖像" fetchPriority="high" /><div className="portrait-bottom"><b>刘鹏熙</b><span>LIU PENGXI / CREATOR</span><svg viewBox="0 0 80 24" aria-hidden="true"><path d="M0 0v24m5-24v24m4-24v24m7-24v24m3-24v24m8-24v24m4-24v24m6-24v24m3-24v24m8-24v24m6-24v24m3-24v24m8-24v24m4-24v24" /></svg></div></div>
          <div className="collage-code"><span><i /><i /><i /></span><Code2 size={32} /><b>MAKE IT<br />HAPPEN.</b><small>从想法到上线 ↗</small></div>
          <div className="name-sticker">有点想法，<br /><b>也有点行动力。</b><span>✳</span></div>
          <div className="gpa-sticker"><span>KEEP LEARNING</span><b>3.92<small>/4.0</small></b><span>GPA · 持续探索中</span></div>
          <div className="collage-note">less talking, more making <svg viewBox="0 0 70 35" aria-hidden="true"><path d="M2 3q12 40 56 16m-11-9 14 8-7 14" /></svg></div>
        </div>
      </section>

      <div className="skills-strip"><div className="section-shell skills-inner"><span>MY EVERYDAY TOOLKIT</span><b>React</b><i>✳</i><b>TypeScript</b><i>✳</i><b>Python</b><i>✳</i><b>ComfyUI</b><i>✳</i><b>好奇心</b><span className="toolkit-end">AND COUNTING ↗</span></div></div>

      <section className="work-section section-shell" id="work" aria-labelledby="work-title">
        <div className="section-heading"><div><p className="section-kicker">01 / SELECTED WORK</p><h2 id="work-title">我的作品<span className="purple-text">，</span>有点东西<span className="purple-text">。</span></h2></div><p className="section-aside">写代码，也创造体验。<br />每个项目，都是一次从 0 到 1 的练习。</p></div>
        <div className="filter-row"><div className="filter-group" role="group" aria-label="按项目类型筛选">{categories.map(category => <button key={category} className={`filter ${filter === category ? 'active' : ''}`} onClick={() => setFilter(category)} aria-pressed={filter === category}>{category}{category === '全部项目' && <span>04</span>}</button>)}</div><span className="work-count" aria-live="polite">{String(shown.length).padStart(2, '0')} PROJECTS / CLICK TO EXPLORE</span></div>
        <div className="project-grid">{shown.map(project => <button className="project-card" key={project.id} onClick={() => setSelected(project)} aria-label={`查看${project.title}项目详情`}><div className="project-cover"><ProjectArt id={project.id} /><span className="project-open"><ArrowUpRight size={26} /></span></div><div className="project-info"><div className="project-meta"><span>{project.category}</span><span>PROJECT / {project.number}</span></div><h3>{project.title}<ArrowUpRight size={22} /></h3><p>{project.description}</p><div className="project-tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div></div></button>)}</div>
        <div className="extra-project"><span className="mini-star">✳</span><p>还有一些来自生活的小灵感。<span>比如，用抽卡的方式探索湛江小吃。</span></p><span className="extra-tag">微信小程序 / 城市探索</span></div>
      </section>

      <section className="about-section" id="about" aria-labelledby="about-title"><div className="section-shell about-grid">
        <div className="about-visual"><div className="about-label">A HUMAN, NOT JUST A RESUME.</div><div className="about-big">代码之外，<br />保持<span>好奇。</span></div><Star className="about-star" /><div className="about-bottom"><MapPin size={17} /> 广东 · 湛江 <span>EST. 2006</span></div></div>
        <div className="about-copy"><p className="section-kicker">02 / A LITTLE ABOUT ME</p><h2 id="about-title">你好，我是刘鹏熙<span>✌</span></h2><p>我在岭南师范学院学习人工智能，也在课堂之外，尝试把技术变成可以使用、可以感受的东西。</p><p>一台能对话的音乐电台，一次可以反复练习的模拟面试，一组关于岭南文化的数字创作——我喜欢从一个具体的想法出发，边做边学，把它一点点变成现实。</p><div className="about-tags"><span><Code2 size={15} /> 用代码解决问题</span><span><Sparkles size={15} /> 用 AI 打开脑洞</span><span><Globe size={15} /> 在实践中学习</span></div><div className="education"><GraduationCap size={27} /><div><b>{profile.school} · {profile.major}</b><span>本科 / {profile.education}</span></div><ArrowUpRight size={20} /></div></div>
      </div></section>

      <section className="journey-section section-shell" id="journey" aria-labelledby="journey-title"><div className="section-heading"><div><p className="section-kicker">03 / THE JOURNEY SO FAR</p><h2 id="journey-title">一路学习<span className="purple-text">，</span>一路动手<span className="purple-text">。</span></h2></div><span className="journey-sticker">WORK IN<br /><b>PROGRESS ↗</b></span></div><div className="journey-layout"><div className="timeline">
        <article className="timeline-item"><span className="timeline-dot" /><div className="timeline-date">2025.07 — 2025.09 <span>实习经历</span></div><h3>Python 开发实习生</h3><h4>广州字节跃动科技有限公司</h4><p>参与数据采集、ETL 数据清洗与 AI 客服 RAG 模块开发，接触从数据处理到 AI 应用的实际开发流程。</p><div className="small-tags"><span>Python</span><span>Scrapy</span><span>LangChain</span><span>Docker</span></div></article>
        <article className="timeline-item"><span className="timeline-dot" /><div className="timeline-date">2024 — 至今 <span>校园经历</span></div><h3>组织活动，也组织好想法</h3><p>担任学生会体育部副部长，参与运动会、篮球赛组织与现场协调；作为 Python 学习小组组长，组织代码分享。</p></article>
      </div><aside className="awards-card"><Trophy size={31} /><p className="section-kicker">A FEW MILESTONES</p><h3>每一份投入，<br />都有回响。</h3><div className="award-row"><b>AIGC 创新挑战赛</b><span>传智杯 · 国赛获奖</span></div><div className="award-row"><b>AIGC 创新挑战赛</b><span>传智杯 · 省赛一等奖</span></div><div className="award-row"><b>中国计算机设计大赛</b><span>AI 应用赛道 · 省级三等奖</span></div></aside></div></section>

      <section className="contact-section" id="contact" aria-labelledby="contact-title"><div className="section-shell"><div className="contact-top"><span className="section-kicker">04 / WHAT’S NEXT?</span><span><i className="status-dot" /> 期待前端 / 产品开发相关机会</span></div><div className="contact-main"><div><h2 id="contact-title">下一件有趣的事，<br />一起<span>创造。</span><ArrowUpRight /></h2><p>如果你想聊聊项目、实习机会，或者一个新想法。</p></div><a className="contact-circle" href={`mailto:${profile.email}`} aria-label="发送邮件给刘鹏熙"><Mail size={28} /><span>SAY HELLO</span><ArrowUpRight size={20} /></a></div><div className="contact-bottom"><a className="email-link" href={`mailto:${profile.email}`}>{profile.email}<ArrowUpRight size={22} /></a><button className="copy-button" onClick={copyEmail}>{copied ? <Check size={16} /> : <Copy size={16} />}{copied ? '已复制邮箱' : '复制邮箱'}</button><a href={profile.resume} download="刘鹏熙_简历.pdf" className="contact-resume">带走一份简历 <Download size={16} /></a></div><div className="copy-feedback" role="status">{copyFailed ? `复制失败，请手动复制：${profile.email}` : copied ? '邮箱已复制，期待与你交流。' : ''}</div></div></section>
    </main>
    <footer className="footer section-shell"><a className="brand" href="#">LPX<span>.</span>STUDIO</a><span>© {new Date().getFullYear()} 刘鹏熙 · 保持好奇，持续创造。</span><a className="back-top" href="#">BACK TO TOP ↑</a></footer>

    <dialog ref={dialog} className="project-dialog" onCancel={() => setSelected(null)} onClose={() => setSelected(null)} onClick={event => { if (event.target === event.currentTarget) setSelected(null) }} aria-labelledby="dialog-title">
      {selected && <><button className="dialog-close" onClick={() => setSelected(null)} aria-label="关闭项目详情"><X size={23} /></button><ProjectArt id={selected.id} /><div className="dialog-body"><div className="project-meta"><span>{selected.category} / PROJECT {selected.number}</span><span>{selected.date}</span></div><h2 id="dialog-title">{selected.title}</h2><p className="dialog-subtitle">{selected.subtitle}</p><div className="project-tags">{selected.tags.map(tag => <span key={tag}>{tag}</span>)}</div><div className="case-section"><h3><span>01</span> 项目的出发点</h3><p>{selected.problem}</p></div><div className="case-section"><h3><span>02</span> 实现与探索</h3><ul>{selected.solution.map(item => <li key={item}><ChevronRight size={17} />{item}</li>)}</ul></div><div className="case-takeaway"><Sparkles size={22} /><p>{selected.takeaway}</p></div><div className="demo-note"><ExternalLink size={16} /><span>真实截图、仓库与体验链接将在整理后补充。</span></div><a className="button button-dark" href={`mailto:${profile.email}?subject=${encodeURIComponent(`想了解项目：${selected.title}`)}`}>聊聊这个项目 <ArrowRight size={18} /></a></div></>}
    </dialog>
  </>
}
