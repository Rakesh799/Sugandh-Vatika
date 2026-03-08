export default function TestimonialsSection() {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold mb-4 italic">Voices of Tranquility</h2>
        <p className="text-slate-500">Shared experiences from our community</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="p-10 bg-white dark:bg-background-dark rounded-3xl shadow-sm border border-primary/5 space-y-6">
          <div className="flex items-center gap-4">
            <img
              alt="Avatar"
              className="h-12 w-12 rounded-full border-2 border-primary/20"
              data-alt="User profile portrait of a smiling woman"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuB-KPVEWjPkJ92YRORiGy4_0sHg9VoAiSh5PkS5GIPnxtq7YuhQFXAuNtXbM7YKPIwMecT4GFEFc-rsqMTblhPUKLNG1nM3HshYaYT43ysdsUD8gQxDaJniX-CyU8xw8ilXU0c2wZEqTmlyKJyp5rZRkC3Jq3INbeQtOIxHaHKRV1NLiGmnTWoks1BzI8koAYC8HL4AzNSBgAO_cBbi0zLoTLVsDEy-D6Yrc9335MalOdlnG5hU3FVuiqFXyO4gA5jO1osQlJ-qPYQ"
            />
            <div>
              <p className="font-bold">Aditi Sharma</p>
              <p className="text-xs text-slate-400">Delhi, India</p>
            </div>
          </div>
          <p className="italic text-slate-600 dark:text-slate-300">
            &quot;The Mysore Sandalwood sticks are truly divine. I&apos;ve tried many brands, but the purity and
            longevity of SatvikSugandh are unmatched.&quot;
          </p>
        </div>
        <div className="p-10 bg-white dark:bg-background-dark rounded-3xl shadow-sm border border-primary/5 space-y-6">
          <div className="flex items-center gap-4">
            <img
              alt="Avatar"
              className="h-12 w-12 rounded-full border-2 border-primary/20"
              data-alt="User profile portrait of a calm man"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCRQg9WWQIC-nA_NVQmByFq9hQARVGjed54kZrQ1Myd3wvtig_Hu5Wsm5360lxBU7oEutIdkAUmULYWZBoDAOhiODS4DPrZnPp6EeeDO5aUwIFsXPQ1okDnG5dDlwg_1gusmaEwZNny5IeubO9tGa3C2mu5FRAH8Pn2cWQ0etxkd8AVvU2PXTwyOWelUmeMsI8znxLPcc-zxbOdvZ8UwFwcg_IpGAnv4Q_tugIn1ts2h-Ctwf4WjnUqUL2YqQljtQezeFRWtp52aow"
            />
            <div>
              <p className="font-bold">Rohan Mehta</p>
              <p className="text-xs text-slate-400">Mumbai, India</p>
            </div>
          </div>
          <p className="italic text-slate-600 dark:text-slate-300">
            &quot;I use the Spiritual Collection every morning for my meditation. It transforms my living room into a
            serene temple space.&quot;
          </p>
        </div>
        <div className="p-10 bg-white dark:bg-background-dark rounded-3xl shadow-sm border border-primary/5 space-y-6">
          <div className="flex items-center gap-4">
            <img
              alt="Avatar"
              className="h-12 w-12 rounded-full border-2 border-primary/20"
              data-alt="User profile portrait of a young professional woman"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDhLOEKJ08nnAtKp-JHWckllrZY8Fgy2g9fHd42yF_s2r68hZ8MORTP07EW3iHNPO3aMnvJxLUWNsFY4c36q9kQJUcGgUfTDRPsBDkeNms5Fb7gCqDzbbn1uLcNrWklp6HC1Ixs_0LEyn1x2dtS9JhIjVqw06Qli_KW0emUW2wFi0oTOAddGQjvesT32TTbLCTpTAgtIPW3HRtfxo0Vsx_zEiisDSFMiGzKtiHP4hnfHO2S0JTslrsthzHHHM9fT9iLhOgY1m3rjpw"
            />
            <div>
              <p className="font-bold">Priya Iyer</p>
              <p className="text-xs text-slate-400">Bangalore, India</p>
            </div>
          </div>
          <p className="italic text-slate-600 dark:text-slate-300">
            &quot;Excellent packaging and high-quality incense. These make the perfect gifts for housewarmings and
            festivals.&quot;
          </p>
        </div>
      </div>
    </section>
  );
}
