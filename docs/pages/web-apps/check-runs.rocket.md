```js server
export const config = {
  path: '/web-apps/check-runs',
  metadata: { title: 'Check Runs', description: 'CBA Check Runs browser application information.' },
  menu: { iconName: 'check2-square', order: 11 },
};

import { layout, components } from '../layout.js';
export { layout, components };
```

# Check Runs

**Type:** Web App

**URL:** https://checks.cbautils.com/

## Overview

Check Runs is a browser-based CBA application for check-related office workflows.

## Use the App

[Launch Check Runs →](https://checks.cbautils.com/)

## Documentation

First, you want to make sure to locate the check register and the check run you will be running. Both must be ```.xlsx``` files. ```.csv``` or other formats will not work.

To get started, navigate to the link above. You should see the following screen:
![Check Runs Web App screenshot](/img/check-runs-screenshot-1.png)

Click "Choose File" under **Check Register File**. Select the check register file.
Next, click "Choose File" under **Current Check Run File**. Select the check run that you will be running.

When you click "Start", the process will begin. 

Once processing is complete (if there were no errors that stopped the processing), you should see the following screen:

![Check Runs Web App completed screenshot](/img/check-runs-app-screenshot-2.jpg)

At the above screen, you can download the three processed files.

## Supporting Resources

Add office forms, reference files, screenshots, and related procedures here.
