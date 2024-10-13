import Link from "next/link";
import { useRouter } from "next/router";
import { PropsWithChildren } from "react";

interface Props extends PropsWithChildren {
  href: string;
}

export default function NavbarLink(props: Props) {
  const router = useRouter();
  const isActive = router.pathname == props.href;

  return (
    <Link href={props.href}>
      <div
        className="block py-2 px-3 text-white bg-red-700 rounded md:bg-transparent md:text-red-500 md:p-0 dark:text-white md:dark:text-red-500"
        aria-current="page"
      >
        {props.children}
      </div>
    </Link>
  );
}
