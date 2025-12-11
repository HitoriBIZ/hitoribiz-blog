import Link from 'next/link';
import type { Work } from '../data/works';

export default function WorkCard({ work }: { work: Work }) {
  return (
    <article className="card" style={{border:'1px solid #eaeaea',borderRadius:12,overflow:'hidden'}}>
      {work.thumbnail && <img src={work.thumbnail} alt={work.title} />}
      <div className="body" style={{padding:16}}>
        <div className="pill" style={{border:'1px solid #eaeaea',borderRadius:999,padding:'2px 10px',fontSize:12,color:'#666'}}>{work.category}</div>
        <h3 style={{margin:'8px 0'}}>
          <Link href={`/works/${work.slug}`}>{work.title}</Link>
        </h3>
        <p style={{color:'#666',marginBottom:8}}>{work.period}</p>
        <p>{work.summary}</p>
      </div>
    </article>
  );
}
