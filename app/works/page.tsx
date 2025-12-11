import { works } from '../../data/works';
import WorkCard from '../../components/WorkCard';

export const dynamic = 'force-static';

export default function WorksIndex() {
  return (
    <div>
      <h1>Works</h1>
      <p style={{color:'#666'}}>WEBサイト設計・制作 / アプリ + Web 連携 / 自社サイト, etc.</p>
      <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill, minmax(280px, 1fr))',gap:24,marginTop:16}}>
        {works.map(w => (<WorkCard key={w.slug} work={w} />))}
      </div>
    </div>
  );
}
