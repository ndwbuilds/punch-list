import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#1B3A5C] text-white">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="text-xl font-bold mb-3">
              <span className="text-[#F5C518]">Punch</span> List
            </div>
            <p className="text-sm text-[#a0b4c8] leading-relaxed">
              Less paperwork. More jobs.<br />
              Simple automation for the trades.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-3 text-[#F5C518] text-sm uppercase tracking-wide">Services</h4>
            <ul className="space-y-2 text-sm text-[#a0b4c8]">
              <li><Link href="/services/document-handling" className="hover:text-white transition-colors">Document Handling</Link></li>
              <li><Link href="/services/scheduling" className="hover:text-white transition-colors">Scheduling Automation</Link></li>
              <li><Link href="/services/workflow-audit" className="hover:text-white transition-colors">Workflow Audits</Link></li>
              <li><Link href="/services/tool-vendor-selection" className="hover:text-white transition-colors">Tool &amp; Vendor Selection</Link></li>
              <li><Link href="/services/ai-tools" className="hover:text-white transition-colors">Custom AI Tools</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-3 text-[#F5C518] text-sm uppercase tracking-wide">Company</h4>
            <ul className="space-y-2 text-sm text-[#a0b4c8]">
              <li><Link href="/about" className="hover:text-white transition-colors">About</Link></li>
              <li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#2a5280] mt-10 pt-6 text-xs text-[#6b8da8] flex flex-col md:flex-row justify-between gap-2">
          <span>&copy; {new Date().getFullYear()} Punch List. All rights reserved.</span>
          <span>Built for the shop, not the boardroom.</span>
        </div>
      </div>
    </footer>
  );
}
