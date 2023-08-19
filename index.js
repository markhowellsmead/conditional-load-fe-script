/**
 * Conditionally load the script in the browser if the condition is met.
 *
 * @version 2023-08-19
 * @author Mark Howells-Mead <mark@permanenttourist.ch>
 */

export const conditionalLoadScript = ({condition = false, min = true, folder = './', version = '1.0.0'}) => {
    if (!!condition) {
        const min = min ? '' : '.min';
        let script = document.createElement('script');
        script.setAttribute(
            'src',
            `${folder}${filename}${min}.js?version=${version}`
        );
        document.head.appendChild(script);
    }
};
