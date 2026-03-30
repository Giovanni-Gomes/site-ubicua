/* @unform/web typings use a React form Pick<> that breaks under TS 5; use a loose component type. */
import { Form as UnformForm } from '@unform/web'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const Form = UnformForm as any
