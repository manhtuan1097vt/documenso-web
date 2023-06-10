'use client';

import { HTMLAttributes } from 'react';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { CreditCard, Key, User } from 'lucide-react';

import { IS_SUBSCRIPTIONS_ENABLED } from '@documenso/lib/constants/features';
import { cn } from '@documenso/ui/lib/utils';
import { Button } from '@documenso/ui/primitives/button';

export type MobileNavProps = HTMLAttributes<HTMLDivElement>;

export const MobileNav = ({ className, ...props }: MobileNavProps) => {
  const pathname = usePathname();

  return (
    <div
      className={cn('flex flex-wrap items-center justify-start gap-x-2 gap-y-4', className)}
      {...props}
    >
      <Link href="/settings/profile">
        <Button
          variant="ghost"
          className={cn(
            'w-full justify-start',
            pathname?.startsWith('/settings/profile') && 'bg-secondary',
          )}
        >
          <User className="mr-2 h-5 w-5" />
          Profile
        </Button>
      </Link>

      <Link href="/settings/password">
        <Button
          variant="ghost"
          className={cn(
            'w-full justify-start',
            pathname?.startsWith('/settings/password') && 'bg-secondary',
          )}
        >
          <Key className="mr-2 h-5 w-5" />
          Password
        </Button>
      </Link>

      {IS_SUBSCRIPTIONS_ENABLED && (
        <Link href="/settings/billing">
          <Button
            variant="ghost"
            className={cn(
              'w-full justify-start',
              pathname?.startsWith('/settings/billing') && 'bg-secondary',
            )}
          >
            <CreditCard className="mr-2 h-5 w-5" />
            Billing
          </Button>
        </Link>
      )}
    </div>
  );
};