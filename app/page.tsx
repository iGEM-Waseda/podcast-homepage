import HeadingWithLine from '@/components/HeadingWithLine';

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
            <div className="mt-auto">
              <p className="text-sm md:text-base text-red font-semibold">Ability :</p>
              <p className="text-sm md:text-base text-red font-semibold">Limiting Factor :</p>
              <p className="text-sm md:text-base text-red font-semibold">Energy Source :</p>
            </div>
          </div>
          <div className="flex-1 border border-red p-6 flex flex-col gap-6">
            <p className="text-4xl md:text-5xl text-center text-red font-bold">Manaka</p>
            <div className="mt-auto">
              <p className="text-sm md:text-base text-red font-semibold">Ability :</p>
              <p className="text-sm md:text-base text-red font-semibold">Limiting Factor :</p>
              <p className="text-sm md:text-base text-red font-semibold">Energy Source :</p>
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
