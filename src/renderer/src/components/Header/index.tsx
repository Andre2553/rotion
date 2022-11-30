import clsx from 'clsx'
import { Code, CaretDoubleRight, TrashSimple } from 'phosphor-react'
import * as Breadcrumbs from './Breadcrumbs'
import * as Collapsible from '@radix-ui/react-collapsible';
import { useParams } from 'react-router-dom';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Document } from '../../shared/types/ipc';

interface HeaderProps{
  isSideBarOpen: boolean;
}

export function Header(props: HeaderProps) {

  const { id } = useParams<{ id: string }>();
  const queryClient = useQueryClient();
  const { mutateAsync: deleteDocument, isLoading: isDeletingDocument} = useMutation( async () => {
     await window.api.deleteDocument({ id: id! });
  },
  {
    onSuccess: () => {
      queryClient.setQueryData<Document[]>(['documents'], (documents) => {
        return documents?.filter((documents) => documents.id !== id);
      })
    }
  });

  const isMacOS = process.platform === 'darwin'
  const isSidebarOpen = props.isSideBarOpen;

  return (
    <div
      id="header"
      className={clsx(
        'border-b h-14 border-rotion-600 py-[1.125rem] px-6 flex items-center gap-4 leading-tight transition-all duration-250 region-drag',
        {
          'pl-24': !isSidebarOpen && isMacOS,
          'w-screen': !isSidebarOpen,
          'w-[calc(100vw-240px)]': isSidebarOpen,
        },
      )}
    >
      <Collapsible.Trigger
        className={clsx('h-5 w-5 text-rotion-200 hover:text-rotion-50', {
          hidden: isSidebarOpen,
          block: !isSidebarOpen,
        })}
      >
        <CaretDoubleRight className="h-4 w-4" />
      </Collapsible.Trigger>

      <>
        <Breadcrumbs.Root>
          <Breadcrumbs.Item>
            <Code weight="bold" className="h-4 w-4 text-pink-500" />
            Structure
          </Breadcrumbs.Item>
          <Breadcrumbs.Separator />
          <Breadcrumbs.HiddenItems />
          <Breadcrumbs.Separator />
          <Breadcrumbs.Item>Back-end</Breadcrumbs.Item>
          <Breadcrumbs.Separator />
          <Breadcrumbs.Item isActive>Untitled</Breadcrumbs.Item>
        </Breadcrumbs.Root>

        <div className="inline-flex region-no-drag">
          <button 
          onClick={() => deleteDocument()}
          disabled={isDeletingDocument}
          className="inline-flex items-center gap-1 text-rotion-100 text-sm hover:text-rotion-50 disabled:opacity-60">
            <TrashSimple className="h-4 w-4" />
            Delete
          </button>
        </div>
      </>
    </div>
  )
}
