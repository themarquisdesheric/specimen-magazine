// @ts-ignore suppressing this warning since the files are found and dev/build is unaffected
import interviews from './interviews/*.md'
import * as contributors from './contributors'
import professors, { professorsKeyedBySlug, professorsByIssue } from './professors'
import issues from './issues'

export {
  interviews,
  contributors,
  professors,
  professorsKeyedBySlug,
  professorsByIssue,
  issues,
}
