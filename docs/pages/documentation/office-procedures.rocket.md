```js server
export const config = {
  path: '/documentation/office-procedures',
  metadata: { title: 'Office Procedures', description: 'CBA office procedures and operational instructions.' },
  menu: { iconName: 'clipboard-check', order: 32 },
};

import { layout, components } from '../layout.js';
export { layout, components };
```

# Office Procedures

This section will contain durable, step-by-step office procedures.

## Procedure Format

Each procedure should identify:

1. **Purpose** — what the procedure accomplishes.
2. **Prerequisites** — information, applications, or permissions required.
3. **Steps** — the exact workflow in order.
4. **Expected Result** — what successful completion looks like.
5. **Troubleshooting** — known problems and corrective actions.
6. **Related Resources** — associated applications, forms, or documents.
