import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t bg-gradient-to-b from-gray-50">
      <div className="container py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="col-span-2 md:col-span-1 space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-2xl font-bold gradient-text">
                tezy.in
              </span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Instagram automation made easy. Simplify your social media management.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-medium">Product</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-gray-900">Features</Link></li>
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-gray-900">Pricing</Link></li>
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-gray-900">FAQ</Link></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-medium">Company</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-gray-900">About</Link></li>
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-gray-900">Blog</Link></li>
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-gray-900">Careers</Link></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-medium">Legal</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-gray-900">Privacy</Link></li>
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-gray-900">Terms</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-16 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} tezy.in. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

