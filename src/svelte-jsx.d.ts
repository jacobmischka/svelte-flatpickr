/// <reference lib="dom" />
/* eslint @typescript-eslint/no-unused-vars: off */
/**
 * Adapted from svelte2tsx
 * @see https://github.com/sveltejs/language-tools/blob/52904b65b16a160050bd6765033067f52438ddb4/packages/svelte2tsx/svelte-jsx.d.ts
 *
 * which was adapted from
 *
 * Adapted from jsx-dom
 * @see https://github.com/proteriax/jsx-dom/blob/be06937ba16908d87bf8aa4372a3583133e02b8a/index.d.ts
 *
 * which was adapted from
 *
 * Adapted from React’s TypeScript definition from DefinitelyTyped.
 * @see https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/react/index.d.ts
 */
declare namespace svelteFlatpickr.JSX {

    /* svelte specific */
    interface ElementClass {
        $$prop_def: any;
    }

    interface ElementAttributesProperty {
        $$prop_def: any; // specify the property name to use
    }

    /* html jsx */


    export type Child = Node | Node[] | string | number;
    export type Children = Child | Child[];

    type NativeElement = HTMLElement;

    interface IntrinsicAttributes {
      slot?: string;
    }

    // TypeScript SVGElement has no `dataset` (Chrome 55+, Firefox 51+).
    type Element = NativeElement & {
      dataset: DOMStringMap;
    };

    //
    // Event Handler Types
    // ----------------------------------------------------------------------
    type EventHandler<E extends Event = Event, T extends EventTarget = HTMLElement> =
      (event: E & { currentTarget: EventTarget & T}) => any;

    type ClipboardEventHandler<T extends EventTarget> = EventHandler<ClipboardEvent, T>;
    type CompositionEventHandler<T extends EventTarget> = EventHandler<CompositionEvent, T>;
    type DragEventHandler<T extends EventTarget> = EventHandler<DragEvent, T>;
    type FocusEventHandler<T extends EventTarget> = EventHandler<FocusEvent, T>;
    type FormEventHandler<T extends EventTarget> = EventHandler<Event, T>;
    type ChangeEventHandler<T extends EventTarget> = EventHandler<Event, T>;
    type KeyboardEventHandler<T extends EventTarget> = EventHandler<KeyboardEvent, T>;
    type MouseEventHandler<T extends EventTarget> = EventHandler<MouseEvent, T>;
    type TouchEventHandler<T extends EventTarget> = EventHandler<TouchEvent, T>;
    type PointerEventHandler<T extends EventTarget> = EventHandler<PointerEvent, T>;
    type UIEventHandler<T extends EventTarget> = EventHandler<UIEvent, T>;
    type WheelEventHandler<T extends EventTarget> = EventHandler<WheelEvent, T>;
    type AnimationEventHandler<T extends EventTarget> = EventHandler<AnimationEvent, T>;
    type TransitionEventHandler<T extends EventTarget> = EventHandler<TransitionEvent, T>;
    type MessageEventHandler<T extends EventTarget> = EventHandler<MessageEvent, T>;

    type ClassNameBase = boolean | string | number | void | null;
    type ClassName = string | Array<ClassNameBase | ClassNameBase[]> | {
      [key: string]: boolean;
    }

    // See CSS 3 CSS-wide keywords https://www.w3.org/TR/css3-values/#common-keywords
    // See CSS 3 Explicit Defaulting https://www.w3.org/TR/css-cascade-3/#defaulting-keywords
    // "all CSS properties can accept these values"
    type CSSWideKeyword = 'initial' | 'inherit' | 'unset';

    // See CSS 3 <percentage> type https://drafts.csswg.org/css-values-3/#percentages
    type CSSPercentage = string;

    // See CSS 3 <length> type https://drafts.csswg.org/css-values-3/#lengths
    type CSSLength = number | string;

    // This interface is not complete. Only properties accepting
    // unit-less numbers are listed here (see CSSProperty.js in React)

    interface DOMAttributes<T extends EventTarget> {
      // jsx-dom specific
     /* children?: Children;
      innerText?: string;
      namespaceURI?: string;
      ref?: ((e: T) => void) | Ref<T>; */

      // Clipboard Events
      oncopy?: ClipboardEventHandler<T>;
      oncut?: ClipboardEventHandler<T>;
      onpaste?: ClipboardEventHandler<T>;

      // Composition Events
      oncompositionend?: CompositionEventHandler<T>;
      oncompositionstart?: CompositionEventHandler<T>;
      oncompositionupdate?: CompositionEventHandler<T>;

      // Focus Events
      onfocus?: FocusEventHandler<T>;
      onfocusin?: FocusEventHandler<T>;
      onfocusout?: FocusEventHandler<T>;
      onblur?: FocusEventHandler<T>;

      // Form Events
      onchange?: FormEventHandler<T>;
      oninput?: FormEventHandler<T>;
      onreset?: FormEventHandler<T>;
      onsubmit?: FormEventHandler<T>;
      oninvalid?: EventHandler<Event, T>;
      onbeforeinput?: EventHandler<Event, T>;

      // Image Events
      onload?: EventHandler;
      onerror?: EventHandler; // also a Media Event

      // Detail Events
      ontoggle?: EventHandler<Event, T>;

      // Keyboard Events
      onkeydown?: KeyboardEventHandler<T>;
      onkeypress?: KeyboardEventHandler<T>;
      onkeyup?: KeyboardEventHandler<T>;

      // Media Events
      onabort?: EventHandler<Event, T>;
      oncanplay?: EventHandler<Event, T>;
      oncanplaythrough?: EventHandler<Event, T>;
      oncuechange?: EventHandler<Event, T>;
      ondurationchange?: EventHandler<Event, T>;
      onemptied?: EventHandler<Event, T>;
      onencrypted?: EventHandler<Event, T>;
      onended?: EventHandler<Event, T>;
      onloadeddata?: EventHandler<Event, T>;
      onloadedmetadata?: EventHandler<Event, T>;
      onloadstart?: EventHandler<Event, T>;
      onpause?: EventHandler<Event, T>;
      onplay?: EventHandler<Event, T>;
      onplaying?: EventHandler<Event, T>;
      onprogress?: EventHandler<Event, T>;
      onratechange?: EventHandler<Event, T>;
      onseeked?: EventHandler<Event, T>;
      onseeking?: EventHandler<Event, T>;
      onstalled?: EventHandler<Event, T>;
      onsuspend?: EventHandler<Event, T>;
      ontimeupdate?: EventHandler<Event, T>;
      onvolumechange?: EventHandler<Event, T>;
      onwaiting?: EventHandler<Event, T>;

      // MouseEvents
      onauxclick?: MouseEventHandler<T>;
      onclick?: MouseEventHandler<T>;
      oncontextmenu?: MouseEventHandler<T>;
      ondblclick?: MouseEventHandler<T>;
      ondrag?: DragEventHandler<T>;
      ondragend?: DragEventHandler<T>;
      ondragenter?: DragEventHandler<T>;
      ondragexit?: DragEventHandler<T>;
      ondragleave?: DragEventHandler<T>;
      ondragover?: DragEventHandler<T>;
      ondragstart?: DragEventHandler<T>;
      ondrop?: DragEventHandler<T>;
      onmousedown?: MouseEventHandler<T>;
      onmouseenter?: MouseEventHandler<T>;
      onmouseleave?: MouseEventHandler<T>;
      onmousemove?: MouseEventHandler<T>;
      onmouseout?: MouseEventHandler<T>;
      onmouseover?: MouseEventHandler<T>;
      onmouseup?: MouseEventHandler<T>;

      // Selection Events
      onselect?: EventHandler<Event, T>;
      onselectionchange?: EventHandler<Event, T>;
      onselectstart?: EventHandler<Event, T>;

      // Touch Events
      ontouchcancel?: TouchEventHandler<T>;
      ontouchend?: TouchEventHandler<T>;
      ontouchmove?: TouchEventHandler<T>;
      ontouchstart?: TouchEventHandler<T>;

      // Pointer Events
      ongotpointercapture?: PointerEventHandler<T>;
      onpointercancel?: PointerEventHandler<T>;
      onpointerdown?: PointerEventHandler<T>;
      onpointerenter?: PointerEventHandler<T>;
      onpointerleave?: PointerEventHandler<T>;
      onpointermove?: PointerEventHandler<T>;
      onpointerout?: PointerEventHandler<T>;
      onpointerover?: PointerEventHandler<T>;
      onpointerup?: PointerEventHandler<T>;
      onlostpointercapture?: PointerEventHandler<T>;

      // UI Events
      onscroll?: UIEventHandler<T>;
      onresize?: UIEventHandler<T>;

      // Wheel Events
      onwheel?: WheelEventHandler<T>;

      // Animation Events
      onanimationstart?: AnimationEventHandler<T>;
      onanimationend?: AnimationEventHandler<T>;
      onanimationiteration?: AnimationEventHandler<T>;

      // Transition Events
      ontransitionstart?: TransitionEventHandler<T>;
      ontransitionrun?: TransitionEventHandler<T>;
      ontransitionend?: TransitionEventHandler<T>;
      ontransitioncancel?: TransitionEventHandler<T>;

      // Svelte Transition Events
      onoutrostart?: EventHandler<CustomEvent<null>, T>;
      onoutroend?: EventHandler<CustomEvent<null>, T>;
      onintrostart?: EventHandler<CustomEvent<null>, T>;
      onintroend?: EventHandler<CustomEvent<null>, T>;

      // Message Events
      onmessage?: MessageEventHandler<T>;
      onmessageerror?: MessageEventHandler<T>;

      // Global Events
      oncancel?: EventHandler<Event, T>;
      onclose?: EventHandler<Event, T>;
      onfullscreenchange?: EventHandler<Event, T>;
      onfullscreenerror?: EventHandler<Event, T>;
    }

    // All the WAI-ARIA 1.1 attributes from https://www.w3.org/TR/wai-aria-1.1/
    interface AriaAttributes {
        /** Identifies the currently active element when DOM focus is on a composite widget, textbox, group, or application. */
        'aria-activedescendant'?: string;
        /** Indicates whether assistive technologies will present all, or only parts of, the changed region based on the change notifications defined by the aria-relevant attribute. */
        'aria-atomic'?: boolean | 'false' | 'true';
        /**
         * Indicates whether inputting text could trigger display of one or more predictions of the user's intended value for an input and specifies how predictions would be
         * presented if they are made.
         */
        'aria-autocomplete'?: 'none' | 'inline' | 'list' | 'both';
        /** Indicates an element is being modified and that assistive technologies MAY want to wait until the modifications are complete before exposing them to the user. */
        'aria-busy'?: boolean | 'false' | 'true';
        /**
         * Indicates the current "checked" state of checkboxes, radio buttons, and other widgets.
         * @see aria-pressed @see aria-selected.
         */
        'aria-checked'?: boolean | 'false' | 'mixed' | 'true';
        /**
         * Defines the total number of columns in a table, grid, or treegrid.
         * @see aria-colindex.
         */
        'aria-colcount'?: number;
        /**
         * Defines an element's column index or position with respect to the total number of columns within a table, grid, or treegrid.
         * @see aria-colcount @see aria-colspan.
         */
        'aria-colindex'?: number;
        /**
         * Defines the number of columns spanned by a cell or gridcell within a table, grid, or treegrid.
         * @see aria-colindex @see aria-rowspan.
         */
        'aria-colspan'?: number;
        /**
         * Identifies the element (or elements) whose contents or presence are controlled by the current element.
         * @see aria-owns.
         */
        'aria-controls'?: string;
        /** Indicates the element that represents the current item within a container or set of related elements. */
        'aria-current'?: boolean | 'false' | 'true' | 'page' | 'step' | 'location' | 'date' | 'time';
        /**
         * Identifies the element (or elements) that describes the object.
         * @see aria-labelledby
         */
        'aria-describedby'?: string;
        /**
         * Identifies the element that provides a detailed, extended description for the object.
         * @see aria-describedby.
         */
        'aria-details'?: string;
        /**
         * Indicates that the element is perceivable but disabled, so it is not editable or otherwise operable.
         * @see aria-hidden @see aria-readonly.
         */
        'aria-disabled'?: boolean | 'false' | 'true';
        /**
         * Indicates what functions can be performed when a dragged object is released on the drop target.
         * @deprecated in ARIA 1.1
         */
        'aria-dropeffect'?: 'none' | 'copy' | 'execute' | 'link' | 'move' | 'popup';
        /**
         * Identifies the element that provides an error message for the object.
         * @see aria-invalid @see aria-describedby.
         */
        'aria-errormessage'?: string;
        /** Indicates whether the element, or another grouping element it controls, is currently expanded or collapsed. */
        'aria-expanded'?: boolean | 'false' | 'true';
        /**
         * Identifies the next element (or elements) in an alternate reading order of content which, at the user's discretion,
         * allows assistive technology to override the general default of reading in document source order.
         */
        'aria-flowto'?: string;
        /**
         * Indicates an element's "grabbed" state in a drag-and-drop operation.
         * @deprecated in ARIA 1.1
         */
        'aria-grabbed'?: boolean | 'false' | 'true';
        /** Indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by an element. */
        'aria-haspopup'?: boolean | 'false' | 'true' | 'menu' | 'listbox' | 'tree' | 'grid' | 'dialog';
        /**
         * Indicates whether the element is exposed to an accessibility API.
         * @see aria-disabled.
         */
        'aria-hidden'?: boolean | 'false' | 'true';
        /**
         * Indicates the entered value does not conform to the format expected by the application.
         * @see aria-errormessage.
         */
        'aria-invalid'?: boolean | 'false' | 'true' | 'grammar' | 'spelling';
        /** Indicates keyboard shortcuts that an author has implemented to activate or give focus to an element. */
        'aria-keyshortcuts'?: string;
        /**
         * Defines a string value that labels the current element.
         * @see aria-labelledby.
         */
        'aria-label'?: string;
        /**
         * Identifies the element (or elements) that labels the current element.
         * @see aria-describedby.
         */
        'aria-labelledby'?: string;
        /** Defines the hierarchical level of an element within a structure. */
        'aria-level'?: number;
        /** Indicates that an element will be updated, and describes the types of updates the user agents, assistive technologies, and user can expect from the live region. */
        'aria-live'?: 'off' | 'assertive' | 'polite';
        /** Indicates whether an element is modal when displayed. */
        'aria-modal'?: boolean | 'false' | 'true';
        /** Indicates whether a text box accepts multiple lines of input or only a single line. */
        'aria-multiline'?: boolean | 'false' | 'true';
        /** Indicates that the user may select more than one item from the current selectable descendants. */
        'aria-multiselectable'?: boolean | 'false' | 'true';
        /** Indicates whether the element's orientation is horizontal, vertical, or unknown/ambiguous. */
        'aria-orientation'?: 'horizontal' | 'vertical';
        /**
         * Identifies an element (or elements) in order to define a visual, functional, or contextual parent/child relationship
         * between DOM elements where the DOM hierarchy cannot be used to represent the relationship.
         * @see aria-controls.
         */
        'aria-owns'?: string;
        /**
         * Defines a short hint (a word or short phrase) intended to aid the user with data entry when the control has no value.
         * A hint could be a sample value or a brief description of the expected format.
         */
        'aria-placeholder'?: string;
        /**
         * Defines an element's number or position in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.
         * @see aria-setsize.
         */
        'aria-posinset'?: number;
        /**
         * Indicates the current "pressed" state of toggle buttons.
         * @see aria-checked @see aria-selected.
         */
        'aria-pressed'?: boolean | 'false' | 'mixed' | 'true';
        /**
         * Indicates that the element is not editable, but is otherwise operable.
         * @see aria-disabled.
         */
        'aria-readonly'?: boolean | 'false' | 'true';
        /**
         * Indicates what notifications the user agent will trigger when the accessibility tree within a live region is modified.
         * @see aria-atomic.
         */
        'aria-relevant'?: 'additions' | 'additions removals' | 'additions text' | 'all' | 'removals' | 'removals additions' | 'removals text' | 'text' | 'text additions' | 'text removals';
        /** Indicates that user input is required on the element before a form may be submitted. */
        'aria-required'?: boolean | 'false' | 'true';
        /** Defines a human-readable, author-localized description for the role of an element. */
        'aria-roledescription'?: string;
        /**
         * Defines the total number of rows in a table, grid, or treegrid.
         * @see aria-rowindex.
         */
        'aria-rowcount'?: number;
        /**
         * Defines an element's row index or position with respect to the total number of rows within a table, grid, or treegrid.
         * @see aria-rowcount @see aria-rowspan.
         */
        'aria-rowindex'?: number;
        /**
         * Defines the number of rows spanned by a cell or gridcell within a table, grid, or treegrid.
         * @see aria-rowindex @see aria-colspan.
         */
        'aria-rowspan'?: number;
        /**
         * Indicates the current "selected" state of various widgets.
         * @see aria-checked @see aria-pressed.
         */
        'aria-selected'?: boolean | 'false' | 'true';
        /**
         * Defines the number of items in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.
         * @see aria-posinset.
         */
        'aria-setsize'?: number;
        /** Indicates if items in a table or grid are sorted in ascending or descending order. */
        'aria-sort'?: 'none' | 'ascending' | 'descending' | 'other';
        /** Defines the maximum allowed value for a range widget. */
        'aria-valuemax'?: number;
        /** Defines the minimum allowed value for a range widget. */
        'aria-valuemin'?: number;
        /**
         * Defines the current value for a range widget.
         * @see aria-valuetext.
         */
        'aria-valuenow'?: number;
        /** Defines the human readable text alternative of aria-valuenow for a range widget. */
        'aria-valuetext'?: string;
    }

    interface HTMLAttributes<T extends EventTarget> extends AriaAttributes, DOMAttributes<T> {
      // jsx-dom-specific Attributes
      class?: ClassName;
      dataset?: object; // eslint-disable-line

      // Standard HTML Attributes
      accept?: string;
      acceptcharset?: string;
      accesskey?: string;
      action?: string;
      allow?: string;
      allowfullscreen?: boolean;
      allowtransparency?: boolean;
      allowpaymentrequest?: boolean;
      alt?: string;
      as?: string;
      async?: boolean;
      autocomplete?: string;
      autofocus?: boolean;
      autoplay?: boolean;
      capture?: 'environment' | 'user' | boolean;
      cellpadding?: number | string;
      cellspacing?: number | string;
      charset?: string;
      challenge?: string;
      checked?: boolean;
      cite?: string;
      classid?: string;
      classname?: ClassName;
      cols?: number;
      colspan?: number;
      content?: string;
      contenteditable?: 'true' | 'false' | boolean;

      // Doesn't work when used as HTML attribute
      /**
       * Elements with the contenteditable attribute support innerHTML and textContent bindings.
       */
      innerHTML?: string;
      // Doesn't work when used as HTML attribute
      /**
       * Elements with the contenteditable attribute support innerHTML and textContent bindings.
       */

      textContent?: string;

      contextmenu?: string;
      controls?: boolean;
      coords?: string;
      crossorigin?: string;
      currenttime?: number;
      decoding?: 'async' | 'sync' | 'auto';
      data?: string;
      datetime?: string;
      default?: boolean;
      defaultmuted?: boolean;
      defaultplaybackrate?: number;
      defer?: boolean;
      dir?: string;
      dirname?: string;
      disabled?: boolean;
      download?: any;
      draggable?: boolean | 'true' | 'false';
      enctype?: string;
      for?: string;
      form?: string;
      formaction?: string;
      formenctype?: string;
      formmethod?: string;
      formnovalidate?: boolean;
      formtarget?: string;
      frameborder?: number | string;
      headers?: string;
      height?: number | string;
      hidden?: boolean;
      high?: number;
      href?: string;
      hreflang?: string;
      htmlfor?: string;
      httpequiv?: string;
      id?: string;
      inputmode?: string;
      integrity?: string;
      is?: string;
      ismap?: boolean;
      keyparams?: string;
      keytype?: string;
      kind?: string;
      label?: string;
      lang?: string;
      list?: string;
      loading?: string;
      loop?: boolean;
      low?: number;
      manifest?: string;
      marginheight?: number;
      marginwidth?: number;
      max?: number | string;
      maxlength?: number;
      media?: string;
      mediagroup?: string;
      method?: string;
      min?: number | string;
      minlength?: number;
      multiple?: boolean;
      muted?: boolean;
      name?: string;
      nonce?: string;
      novalidate?: boolean;
      open?: boolean;
      optimum?: number;
      part?: string;
      pattern?: string;
      placeholder?: string;
      playsinline?: boolean;
      poster?: string;
      preload?: string;
      radiogroup?: string;
      readonly?: boolean;
      referrerpolicy?: string;
      rel?: string;
      required?: boolean;
      reversed?: boolean;
      role?: string;
      rows?: number;
      rowspan?: number;
      sandbox?: string;
      scope?: string;
      scoped?: boolean;
      scrolling?: string;
      seamless?: boolean;
      selected?: boolean;
      shape?: string;
      size?: number;
      sizes?: string;
      slot?: string;
      span?: number;
      spellcheck?: boolean | 'true' | 'false';
      src?: string;
      srcdoc?: string;
      srclang?: string;
      srcset?: string;
      start?: number;
      step?: number | string;
      style?: string;
      summary?: string;
      tabindex?: number;
      target?: string;
      title?: string;
      type?: string;
      usemap?: string;
	  // Disabled because of conflict with SvelteFlatpickrProps
      // value?: string | string[] | number | null;
      /**
       * a value between 0 and 1
      */
      volume?: number;
      width?: number | string;
      wmode?: string;
      wrap?: string;

      // RDFa Attributes
      about?: string;
      datatype?: string;
      inlist?: any;
      prefix?: string;
      property?: string;
      resource?: string;
      typeof?: string;
      vocab?: string;

      // Non-standard Attributes
      autocapitalize?: string;
      autocorrect?: string;
      autosave?: string;
      color?: string;
      itemprop?: string;
      itemscope?: boolean;
      itemtype?: string;
      itemid?: string;
      itemref?: string;
      results?: number;
      security?: string;
      unselectable?: boolean;
    }

    // this list is "complete" in that it contains every SVG attribute
    // that React supports, but the types can be improved.
    // Full list here: https://facebook.github.io/react/docs/dom-elements.html
    //
    // The three broad type categories are (in order of restrictiveness):
    //   - "number | string"
    //   - "string"
    //   - union of string literals

    // eslint-disable-next-line @typescript-eslint/no-empty-interface
    interface HTMLProps<T extends EventTarget> extends HTMLAttributes<T> {}

    interface SvelteOptionProps extends HTMLProps<HTMLOptionElement> {
        value?: any;
    }

    interface SvelteSelectProps extends HTMLProps<HTMLSelectElement> {
      value?: any;
    }

    interface SvelteInputProps extends HTMLProps<HTMLInputElement> {
      group?: any;
      files?: FileList | null;
      indeterminate?: boolean;
    }
}
