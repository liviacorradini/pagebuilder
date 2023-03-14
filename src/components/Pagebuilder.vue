<template>
  <div class="top-bar" id="top-bar">
    <div class="break-points">
      <img class="logo" src="../assets/images/logo_cubo.png">
      <div class="devices" id="devices"></div>
    </div>
    <div class="options" id="option-menu"></div>
  </div>
  <div id="container">
    <div class="content">
      <div class="side-bar" id="side-bar">
        <div class="sider-bar-menu">
          <div class="options-button icon-components" id="components-button" title="Blocos">
            <input type="checkbox" id="btn-block" name="btn-block" class="btn-menu">
          </div>
          <div class="options-button icon-layer" id="layers-button" title="Camadas">
            <input type="checkbox" id="btn-layer" name="btn-layer" class="btn-menu">
          </div>
          <div class="options-button icon-config" id="config-button" title="Configurações">
            <input type="checkbox" id="btn-config" name="btn-config" class="btn-menu">
          </div>
          <div class="options-button icon-style" id="style-button" title="Estilos">
            <input type="checkbox" id="btn-style" name="btn-style" class="btn-menu">
          </div>
        </div>
        <div style="overflow: auto; max-height:90vh;">
          <div class="side-bar-menu-content">
            <div class="options-content" id="blocks">
            </div>
            <div class="options-content" id="layers">
            </div>
            <div class="options-content" id="style-manager">
              <div id="selector"></div>
              <div id="style"></div>
            </div>
            <div class="options-content" id="config-manager">
              <span class="title-manager">Configurações de componentes</span>
              <div id="config"></div>
            </div>
          </div>
        </div>
        <div class="save"></div>
      </div>
      <div id="gjs">
      </div>
    </div>
  </div>
</template>


<script setup>
import { ref, onMounted } from "vue";
import grapesjs from "grapesjs";
import "grapesjs/dist/css/grapes.min.css";
import "../assets/css/page-builder.css";
import "../assets/js/page-builder.js";
import pt from "grapesjs/src/i18n/locale/pt";
import parserPostCSS from "grapesjs-parser-postcss";
import customCode from "grapesjs-custom-code";
import scriptEditor from "grapesjs-script-editor";
import cuboForm from "../plugins/cubosuite-form";
import borders from "grapesjs-plugin-borders";
import webpage from "grapesjs-preset-webpage";
import basicBlocs from "grapesjs-blocks-basic"

onMounted(() => {

  const topbar = document.getElementById("top-bar");
  const sidebar = document.getElementById('side-bar');
  const gjs = document.getElementById('gjs');

  const editor = grapesjs.init({
    container: "#gjs",
    height: "94vh",
    width: "100vw",

    i18n: {
      locale: pt,
      localeFallback: "pt",
      messages: { pt },
    },

    storageManager: {
      id: "",
      type: "cuboServer",
      autosave: false,
      autoload: false,
      stepsBeforeSave: 1,
      onStore: (data, editor) => {
        const pagesHtml = editor.Pages.getAll().map((page) => {
          const component = page.getMainComponent();
          return {
            html: editor.getHtml({ component }),
            css: editor.getCss({ component }),
          };
        });
        return { data, pagesHtml };
      },
    },
    plugins: [
      parserPostCSS,
      customCode,
      scriptEditor,
      cuboForm,
      borders,
      webpage,
      basicBlocs
    ],

    pluginsOpts: {
      [borders]: {
        selected: "#036651",
        resizer: "#036651",
        toolbar: "#036651",
        badge: "#036651",
        highlighter: "#036651",
      },
    },

    deviceManager: {
      devices: [
        {
          id: "desktop",
          name: "Desktop",
          width: "",
        },
        {
          id: "notebook",
          name: "Notebook",
          width: "1200px",
          widthMedia: "1600px",
        },
        {
          id: "tablet",
          name: "Tablet",
          width: "768px",
          widthMedia: "992px",
        },
        {
          id: "mobilePortrait",
          name: "Mobile portrait",
          width: "320px",
          widthMedia: "575px",
        },
      ],
    },

    blockManager: {
      appendTo: document.querySelector('#blocks'),
    },
    styleManager: {
      appendTo: document.querySelector('#style'),
    },
    selectorManager: {
      appendTo: document.querySelector('#selector'),
    },
    layerManager: {
      appendTo: document.querySelector('#layers'),
    },
    traitManager: {
      appendTo: document.querySelector('#config'),
    },

  });

  editor.Panels.addPanel({
    id: 'devices',
    el: ".devices",
    buttons: [
      { id: "set-device-desktop", command: function (e) { return e.setDevice("Desktop") }, className: "devices-break device-desktop active", attributes: { title: "Desktop", id:'desktop' }, active: 1 },
      { id: "set-device-notebook", command: function (e) { return e.setDevice("Notebook") }, className: "devices-break device-note", attributes: { title: "Notebook", id:'notebook' }, },
      { id: "set-device-tablet", command: function (e) { return e.setDevice("Tablet") }, className: "devices-break device-tablet", attributes: { title: "Tablet", id:'tablet' }, },
      { id: "set-device-mobile", command: function (e) { return e.setDevice("Mobile portrait") }, className: "devices-break device-mobile", attributes: { title: "Mobile", id:'mobile' }, }
    ]
  });

  editor.Panels.addPanel({
    id: 'other',
    el: '.save',
    buttons: [
      {
        id: "save",
        className: "icon-save",
        command: function () {
          editor.store();
        },
        attributes: { title: "Salvar" },
      }
    ]
  });

  editor.Panels.addPanel({
    id: 'teste',
    el: '.options',
    buttons: [
      {
        id: "visibility",
        active: true, // active by default
        className: "icon-grid",
        label: '<i class="bi bi-border"></i>',
        command: "sw-visibility",
        attributes: { title: "Componente" },
      },
      {
        id: 'open-code',
        className: "icon-code",
        command: 'core:open-code',
        attributes: { title: "Código" },
      },
      {
        id: 'fullscreen',
        className: "icon-fullscreen",
        command: 'core:fullscreen',
        attributes: { title: "Fulscreen" },
      },
      {
        id: 'preview',
        className: "icon-eye",
        command: 'preview',
        attributes: { title: "Preview" },
      }
    ]
  });

  editor.onReady(() => editor.Blocks.render())
  editor.on('run:preview', () => {
    sidebar.classList.add("display-none");
    topbar.classList.add("display-none");
    gjs.classList.add('h-100');
    editor.stopCommand('sw-visibility');
  });

  editor.on('stop:preview', () => {
    sidebar.classList.remove("display-none");
    topbar.classList.remove("display-none");
    gjs.classList.remove('h-100');
    editor.runCommand('sw-visibility');
  });

  editor.StorageManager.add("cuboServer", {
    load(storageOptions) { },

    store(data, storageOptions) {
      console.log(JSON.stringify(data.data.pages[0].frames[0]));
      // const css = editor.getCss();
      // const head = `<style type="text/css">${css}</style>`;

      // const payload = {
      //   assets: JSON.stringify(data.data.assets),
      //   components: JSON.stringify(
      //     data.data.pages[0].frames[0].component.components
      //   ),
      //   css: data.pagesHtml[0].css,
      //   html: data.pagesHtml[0].html,
      //   styles: JSON.stringify(data.data.styles),
      //   head,
      // };

      // landingService.updateLanding(tokenJson.message, landing.id, payload);
      alert("salvou");
      //  Swal.fire({
      // text: "Landing page salva.",
      //  icon: "success",
      //  showConfirmButton: false,
      //   toast: true,
      //  position: "top-start",
      // timer: "2000",
      // background: "#545454",
      // color: "#DDDDDD",
      // timerProgressBar: true,
      //  footer: `<a href="https://${landing.domain.domain}/${landing.url}" target="_BLANK">Visualizar Landing Page</a>`,
      //  });
    },
  });
});

</script>
