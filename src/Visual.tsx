import { Play, Search, Heart, UserPlus, LockKeyhole, ShoppingBag, MousePointer2, Video, MessageCircle, ArrowRight, Sparkles, RotateCw, Footprints, Eye, Smartphone } from 'lucide-react';
import type { CSSProperties } from 'react';
import { scenes } from './timeline';

export function Avatar({age, ending=false}: {age:number; ending?:boolean}) {
  return <div className={`avatar-wrap ${ending ? 'ending-avatar' : ''}`}>
    <div className="orbit orbit-one"/><div className="orbit orbit-two"/>
    <svg className="avatar" viewBox="0 0 240 300" fill="none" aria-label={`Fictional character, age ${age}`} role="img">
      <defs><linearGradient id="body" x1="60" y1="90" x2="190" y2="300" gradientUnits="userSpaceOnUse"><stop stopColor="#59738d"/><stop offset="1" stopColor="#1c3048"/></linearGradient><linearGradient id="face" x1="80" y1="25" x2="165" y2="120"><stop stopColor="#d7e4ed"/><stop offset="1" stopColor="#819bb0"/></linearGradient></defs>
      <ellipse cx="120" cy="282" rx="85" ry="12" fill="#07101c"/>
      <path d="M63 283V189c0-45 23-64 57-64s57 19 57 64v94" fill="url(#body)"/>
      <path d="M90 136l30 26 30-26" stroke="#8097ab" strokeWidth="2"/>
      <path d="M103 112v23c0 17 34 17 34 0v-23" fill="#8ba1b4"/>
      <rect x="77" y="33" width="86" height="90" rx="40" fill="url(#face)"/>
      <path d="M77 73c-10-48 22-64 47-61 34 0 48 29 38 62-5-12-10-26-23-28-13 15-35 20-62 17" fill="#20344b"/>
      <path d="M60 195l-12 62c-3 20 24 23 29 5l16-61M180 195l12 62c3 20-24 23-29 5l-16-61" fill="url(#body)"/>
      {age <= 3 ? <g transform="rotate(-8 120 220)"><rect x="66" y="184" width="109" height="70" rx="9" fill="#0a1627" stroke="#6e8da5" strokeWidth="2"/><rect x="74" y="192" width="93" height="54" rx="4" fill="#16415c"/><path d="M113 203l21 15-21 15" fill="#38bdf8"/></g> : <g transform="rotate(12 165 210)"><rect x="149" y="180" width="37" height="65" rx="7" fill="#0a1627" stroke="#7da0ba" strokeWidth="2"/><rect x="154" y="189" width="27" height="43" rx="3" fill="#1d526e"/><circle cx="167" cy="238" r="2" fill="#38bdf8"/></g>}
    </svg>
    <div className="age-badge"><span className="live-dot"/> AGE {age} <span> / illustrative</span></div>
  </div>;
}
function Chip({children, kind='observed', style}: {children:React.ReactNode;kind?:string;style?:CSSProperties}) { return <div className={`signal-chip ${kind}`} style={style}><span className="shape"/>{children}</div>; }
export default function Visual({index, progress}: {index:number;progress:number}) {
  const scene = scenes[index];
  if (index === 6) return <div className="inference-demo visual-enter">
    <div className="service-label"><span className="live-dot"/> INSIDE ONE HYPOTHETICAL SERVICE</div>
    <div className="inference-flow"><div className="signal-stack"><Chip><Video size={17}/> Watches running videos</Chip><Chip><Search size={17}/> Searches training tips</Chip><Chip><Heart size={17}/> Likes a running post</Chip></div><div className="flow-connector"><ArrowRight/><span>patterns</span></div><div className={`prediction ${progress > .2 ? 'revealed' : ''}`}><Sparkles size={30}/><span>POSSIBLE INTEREST</span><strong>Running</strong><small>A guess. Not a fact.</small></div></div>
    <p className="visual-note">Illustrative actions → uncertain prediction. No real profile is being read.</p>
  </div>;
  if (index === 7) return <div className="loop-demo visual-enter"><div className="service-label">ONE SERVICE · AN ILLUSTRATIVE FEEDBACK LOOP</div><div className={`loop-grid loop-phase-${Math.min(3,Math.floor(progress*4))}`}><div className="loop-card inferred"><Sparkles/><small>01 / PREDICT</small><strong>Possible running interest</strong></div><ArrowRight className="loop-arrow"/><div className="loop-card recommended"><Footprints/><small>02 / RECOMMEND</small><strong>A running video appears</strong></div><div className="loop-return"><RotateCw/><span>Learn from the response</span></div><div className="loop-card observed"><MousePointer2/><small>03 / INTERACT</small><strong>You watch… or skip</strong></div></div><p className="visual-note">A recommendation can influence what you see. Your choice is still uncertain.</p></div>;
  if (index === 8) return <div className="end-visual visual-enter"><Avatar age={18} ending/><div className="question-mark">?</div><div className="end-label">Your choices. Their predictions.<br/><strong>The conversation continues.</strong></div></div>;
  return <div className={`life-visual visual-enter stage-${index}`}>
    <div className="visual-coordinate">A FICTIONAL LIFE, ONLINE</div>
    <Avatar age={scene.age}/>
    {index === 0 && <div className="first-trace"><span className="trace-line"/><Chip><Play size={16}/> A video plays</Chip><small>A possible trace, not an identified child.</small></div>}
    {index === 1 && <div className="service-cluster video-cluster"><div className="cluster-title"><Video size={17}/> VIDEO SERVICE</div><Chip><Eye size={16}/> Watch activity</Chip><Chip><Search size={16}/> Search activity</Chip><small>If recorded / if enabled<br/>May relate to a device or account.</small></div>}
    {index === 2 && <div className="app-bubbles"><div className="app-icon"><MessageCircle/></div><div className="app-icon"><Video/></div><div className="app-icon"><Search/></div><div className="service-cluster"><div className="cluster-title"><Smartphone size={17}/> DISTINCT APPS</div><Chip>App interactions</Chip><Chip>Device activity</Chip><small>Possible signals. Separate contexts.</small></div></div>}
    {index === 3 && <div className="service-cluster social-cluster"><div className="cluster-title">SOCIAL SERVICE · SAMPLE ACCOUNT</div><div className="sample-profile"><div className="sample-avatar"/> <span>Our fictional character<small>No real account connected</small></span></div><Chip><Heart size={16}/> Likes</Chip><Chip><UserPlus size={16}/> Follows</Chip><small>Examples within this service.</small></div>}
    {index === 4 && <div className="identity-panels"><div className="service-cluster"><div className="cluster-title">YOU CHOOSE TO SHARE</div><Chip>Public posts</Chip><div className="private-note"><LockKeyhole size={17}/> Private messages stay distinct</div></div><div className="service-cluster"><div className="cluster-title">A SERVICE MAY OBSERVE</div><Chip>Views & interactions</Chip><small>Not every action is public.<br/>Collection varies by service.</small></div></div>}
    {index === 5 && <div className="separate-services">{[['VIDEO',Video,'Watch activity'],['SOCIAL',Heart,'Likes & follows'],['SHOPPING',ShoppingBag,'Shopping & subscriptions']].map(([title,Icon,label])=><div className="service-cluster" key={String(title)}><div className="cluster-title">{typeof Icon !== 'string' && <Icon size={17}/>} {String(title)}</div><Chip>{String(label)}</Chip></div>)}<small>Separate service contexts.<br/>No automatic sharing is implied.</small></div>}
  </div>;
}
