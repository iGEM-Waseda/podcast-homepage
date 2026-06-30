import HeadingWithLine from '@/components/HeadingWithLine';
type AbilityItem = {
  label: string;
  level: number | "MAX";
};

function AbilityChart({ items }: { items: AbilityItem[] }) {
  return (
    <div className="pl-4">
      {/* 目盛りラベル(1〜5) */}
      <div className="flex items-center gap-2 mb-1">
        <div className="w-32 md:w-36 shrink-0" />
        <div className="relative flex-1 flex justify-between text-[10px] text-red/60">
          {[1, 2, 3, 4, 5].map((n) => (
            <span key={n}>{n}</span>
          ))}
        </div>
      </div>

      <div className="space-y-2.5">
        {items.map((item) => (
          <div key={item.label} className="flex items-center gap-2">
            <p className="text-xs md:text-sm text-red w-32 md:w-36 shrink-0 whitespace-nowrap">
              {item.label}
            </p>
            <div className="relative flex-1 h-3 bg-red/10 rounded-sm overflow-visible">
              {/* 1〜5の区切り線 */}
              {[1, 2, 3, 4].map((n) => (
                <div
                  key={n}
                  className="absolute top-0 h-3 w-px bg-red/20"
                  style={{ left: `${(n / 5) * 100}%` }}
                />
              ))}

              {item.level === "MAX" ? (
                <div
                  className="absolute top-0 left-0 h-3 rounded-sm bg-gradient-to-r from-red to-orange-500 shadow-[0_0_8px_2px_rgba(220,38,38,0.6)]"
                  style={{ width: "115%" }}
                >
                  <span className="absolute -right-2 top-1/2 -translate-y-1/2 translate-x-full text-red font-bold text-xs">
                
                  </span>
                </div>
              ) : (
                <div
                  className="absolute top-0 left-0 h-3 rounded-sm bg-red"
                  style={{ width: `${((item.level as number) / 5) * 100}%` }}
                />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default function Home() {
  return (
    <>
      <section className="relative w-full h-screen pt-[84px] xl:pt-[108px] flex justify-center overflow-hidden bg-customblack">
        <p className="text-6xl text-center pt-8 text-white font-medium">あいじぇむわせだの、バイオな毎日</p>
      </section>

      <section className="section">
        <p className="text-5xl text-center pt-8">ここにDNAみたいなデザインが入る</p>
        <HeadingWithLine>Personality</HeadingWithLine>

        {/* 齋藤さんへ まずはここの自己紹介を完成させた上で文字サイズなどをいじってみるといいと思います。
          その時、Chromeを使っているならF12または右クリックして検証をクリックして開発者モードを開き、
          画面サイズを変更しながらチェックするといいです(それがスタンダードなやり方なのかはちょっとわからない) */}
        <div className="flex flex-col md:flex-row gap-6 mt-6">
          <div className="flex-1 border border-red p-6 flex flex-col gap-6">
            <p className="text-4xl md:text-5xl text-center text-red font-bold">Eito</p>
            <div className="mt-auto space-y-3">
              <div>
                <p className="text-sm md:text-base text-red font-semibold">Ability :</p>
                <AbilityChart
                  items={[
                    { label: "iGEM愛", level: "MAX" },
                    { label: "サーベイ", level: 3 },
                    { label: "独創性", level: 4 },
                    { label: "雑務の拾い食い", level: 2 },
                    { label: "即レス", level: 5 },
                    { label: "カフェイン血中濃度", level: 3 },
                  ]}
                />
              </div>
              <div>
                <p className="text-sm md:text-base text-red font-semibold">Limiting Factor :</p>
                 <ul className="list-disc list-inside pl-8 mt-1.5 text-sm md:text-base text-red">
                  <li>{/* ここに内容 */}</li>
                  <li></li>
                 </ul>
              </div>
              <div>
                <p className="text-sm md:text-base text-red font-semibold">Energy Source :</p>
                <ul className="list-disc list-inside pl-8 mt-1.5 text-sm md:text-base text-red">
                  <li></li>
                  <li></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="flex-1 border border-red p-6 flex flex-col gap-6">
            <p className="text-4xl md:text-5xl text-center text-red font-bold">Manaka</p>
            <div className="mt-auto space-y-3">
              <div>
                <p className="text-sm md:text-base text-red font-semibold">Ability :</p>
                <AbilityChart
                  items={[
                    { label: "iGEM愛", level: "MAX" },
                    { label: "サーベイ", level: 2 },
                    { label: "独創性", level: 2 },
                    { label: "雑務の拾い食い", level: 4 },
                    { label: "即レス", level: 4 },
                    { label: "カフェイン血中濃度", level: 5 },
                  ]}
                />
              </div>
              <div>
                <p className="text-sm md:text-base text-red font-semibold">Limiting Factor :</p>
                <ul className="list-disc list-inside pl-8 mt-1.5 text-sm md:text-base text-red">
                  <li>実験レポートによる寝不足</li>
                  <li>たまにひく夏風邪</li>
                </ul>
              </div>
              <div>
                <p className="text-sm md:text-base text-red font-semibold">Energy Source :</p>
                <ul className="list-disc list-inside pl-8 mt-1.5 text-sm md:text-base text-red">
                  <li>カフェラテ（毎日必要！！）</li>
                  <li>音楽を聴く（ボカロ寄りのJ-ロック）</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* ここまで */}
        
        <div className="mt-8 md:mt-16">
          <p className="text-[1.25rem] md:text-[2.25rem] text-red font-semibold leading-none mb-0">What is...</p> {/* ゴリ押し */}
          <HeadingWithLine className="mt-0-override">iGEM - Waseda</HeadingWithLine>
        </div>
      </section>
    </>
  );
}
