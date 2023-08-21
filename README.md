# Conditionally load a script in the frontend

Conditionally load the script in the browser if the condition is met.

## Example

Values for `sht_theme` are usually passed via script localisation.

```php
wp_localize_script('sht', 'sht_theme', [
		'directory_uri' => get_template_directory_uri(),
		'version' => $sht_timestamp,
		'debug' => defined('WP_DEBUG') && constant('WP_DEBUG'),
	]);
```

Add the script to the main root file, which is then compiled. The script is loaded 
dynamically to the `head` of the page and will only be loaded if the `condition` is true.

```javascript
import { conditionalLoadScript } from '@markhowellsmead/conditional-load-fe-script';

conditionalLoadScript({
	condition: document.querySelectorAll('[data-sht-tabs]').length,
	min: !sht_theme.debug,
	folder: sht_theme.directory_uri,
	version: sht_theme.version,
	filename: 'sht-tabs',
});
```
