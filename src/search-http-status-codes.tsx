import {
  ActionPanel,
  CopyToClipboardAction,
  List,
  ListItem,
  ListSection,
  OpenInBrowserAction
} from '@raycast/api'
import {useEffect, useState} from 'react'
import {HTTPStatusCode, StatusCodes} from './status-codes'

export default function Foo() {
  const [search, setSearch] = useState<string>('')
  const [statusCodes, setStatusCodes] = useState<HTTPStatusCode[]>(StatusCodes)

  useEffect(() => {
    const query = search.trim()

    if (search === '') {
      setStatusCodes(StatusCodes)
    } else {
      setStatusCodes(
        StatusCodes.filter(statusCode => matchStatusCode(statusCode, query))
      )
    }
  }, [search])

  return (
    <List onSearchTextChange={setSearch}>
      {search ? (
        <FlatList statusCodes={statusCodes} />
      ) : (
        <SectionedList statusCodes={statusCodes} />
      )}
    </List>
  )
}

function SectionedList({statusCodes}: {statusCodes: HTTPStatusCode[]}) {
  const categoryNames = new Set(statusCodes.map(status => status.category))

  return (
    <>
      {Array.from(categoryNames).map(category => (
        <ListSection key={category} title={category}>
          <FlatList
            statusCodes={statusCodes.filter(
              status => status.category === category
            )}
          />
        </ListSection>
      ))}
    </>
  )
}

function FlatList({statusCodes}: {statusCodes: HTTPStatusCode[]}) {
  return (
    <>
      {statusCodes.map(status => (
        <ListItem
          key={status.code}
          id={String(status.code)}
          title={`${status.code}: ${status.name}`}
          subtitle={status.description}
          actions={
            <ActionPanel>
              <OpenInBrowserAction
                url={`https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/${status.code}`}
              />
              <CopyToClipboardAction
                content={`https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/${status.code}`}
              />
            </ActionPanel>
          }
        />
      ))}
    </>
  )
}

function matchStatusCode(status: HTTPStatusCode, query: string): boolean {
  query = query.toLowerCase()
  return (
    status.name.toLowerCase().includes(query) ||
    status.description.toLowerCase().includes(query) ||
    status.category.toLowerCase().includes(query) ||
    String(status.code).includes(query)
  )
}
