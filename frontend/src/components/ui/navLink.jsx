import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import classNames from 'classnames';

function NavLink({ href, children }) {
    const pathname = usePathname()
    const isActive = pathname === href;

    return (
        <Link href={href} className={classNames('text-sm text-muted-foreground', { 'text-white': isActive })}>
            {children}
        </Link>
    );
}

export default NavLink;
