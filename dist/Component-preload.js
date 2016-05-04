/**
* This file was auto-generated by SAP Web IDE build and includes all
* the source files required by SAPUI5 runtime for performance optimization.
* PLEASE DO NOT EDIT THIS FILE!! Changes will be overwritten the next time the build is run.
*/
jQuery.sap.registerPreloadedModules({
	"version": "2.0",
	"name": "com/convista/Component-preload",
	"modules": {
		"com/convista/view/Main.view.xml": "<mvc:View xmlns:html=\"http://www.w3.org/1999/xhtml\" xmlns:mvc=\"sap.ui.core.mvc\" xmlns=\"sap.m\" xmlns:l=\"sap.ui.layout\"\n\txmlns:fm=\"sap.ui.layout.form\" xmlns:core=\"sap.ui.core\" xmlns:viz=\"sap.viz.ui5.controls\" xmlns:viz.feeds=\"sap.viz.ui5.controls.common.feeds\"\n\txmlns:viz.data=\"sap.viz.ui5.data\" xmlns:tnt=\"sap.tnt\" controllerName=\"com.convista.controller.Main\">\n\t<App>\n\t\t<tnt:ToolPage id=\"toolPage\">\n\t\t\t<tnt:header>\n\t\t\t\t<tnt:ToolHeader>\n\t\t\t\t\t<Button id=\"sideNavigationToggleButton\" icon=\"sap-icon://menu2\" type=\"Transparent\" press=\"onSideNavButtonPress\">\n\t\t\t\t\t\t<layoutData>\n\t\t\t\t\t\t\t<OverflowToolbarLayoutData priority=\"NeverOverflow\" />\n\t\t\t\t\t\t</layoutData>\n\t\t\t\t\t</Button>\n\t\t\t\t</tnt:ToolHeader>\n\t\t\t</tnt:header>\n\t\t\t<tnt:sideContent>\n\t\t\t\t<tnt:SideNavigation expanded=\"false\" itemSelect=\"onItemSelect\">\n\t\t\t\t\t<tnt:NavigationList items=\"{path: '/navigation'}\">\n\t\t\t\t\t\t<tnt:NavigationListItem text=\"{title}\" icon=\"{icon}\" enabled=\"{enabled}\" expanded=\"{expanded}\" items=\"{items}\" key=\"{key}\">\n\t\t\t\t\t\t\t<tnt:NavigationListItem text=\"{title}\" key=\"{key}\" enabled=\"{enabled}\"></tnt:NavigationListItem>\n\t\t\t\t\t\t</tnt:NavigationListItem>\n\t\t\t\t\t</tnt:NavigationList>\n\t\t\t\t\t<tnt:fixedItem>\n\t\t\t\t\t\t<tnt:NavigationList items=\"{path: '/fixedNavigation'}\">\n\t\t\t\t\t\t\t<tnt:NavigationListItem text=\"{title}\" icon=\"{icon}\"></tnt:NavigationListItem>\n\t\t\t\t\t\t</tnt:NavigationList>\n\t\t\t\t\t</tnt:fixedItem>\n\t\t\t\t</tnt:SideNavigation>\n\t\t\t</tnt:sideContent>\n\t\t\t<tnt:mainContents>\n\t\t\t\t<core:Fragment fragmentName=\"com.convista.view.Auswahl\" type=\"XML\" />\n\t\t\t\t<NavContainer id=\"pageContainer\">\n\t\t\t\t\t<pages>\n\t\t\t\t\t\t<ScrollContainer id=\"page1\" horizontal=\"false\" vertical=\"true\" height=\"100%\">\n\t\t\t\t\t\t\t<Panel id='contentPanel2' class=\"panelStyle\" expanded=\"true\" width=\"auto\">\n\t\t\t\t\t\t\t\t<HBox class=\"settingsHBox\">\n\t\t\t\t\t\t\t\t\t<VBox class='settingsBox' width=\"20%\">\n\t\t\t\t\t\t\t\t\t\t<Label text=\"Anzahl Zahlungseingänge\" id=\"label01Za\" class=\"settingsLabel\"/>\n\t\t\t\t\t\t\t\t\t\t<ObjectNumber class=\"sapUiSmallMarginBottom\" number=\"42.232\"/>\n\t\t\t\t\t\t\t\t\t</VBox>\n\t\t\t\t\t\t\t\t\t<VBox class='settingsBox' width=\"20%\">\n\t\t\t\t\t\t\t\t\t\t<Label text=\"Volumen Zahlungseingänge\" id=\"label01Zb\" class=\"settingsLabel\"/>\n\t\t\t\t\t\t\t\t\t\t<ObjectNumber class=\"sapUiSmallMarginBottom\" number=\"21.232.232,00\" unit=\"EURO\"/>\n\t\t\t\t\t\t\t\t\t</VBox>\n\t\t\t\t\t\t\t\t</HBox>\n\t\t\t\t\t\t\t</Panel>\n\t\t\t\t\t\t\t<viz:Popover id=\"idPopOver\"></viz:Popover>\n\t\t\t\t\t\t\t<viz:VizFrame id=\"idVizFrame\" uiConfig=\"{applicationSet:'fiori'}\" height='100%' width=\"100%\" vizType=\"column\" >\n\t\t\t\t\t\t\t\t<viz:dataset>\n\t\t\t\t\t\t\t\t\t<viz.data:FlattenedDataset data=\"{/Umsatz}\">\n\t\t\t\t\t\t\t\t\t\t<viz.data:dimensions>\n\t\t\t\t\t\t\t\t\t\t\t<viz.data:DimensionDefinition name=\"month1\" value=\"{month}\"/>\n\t\t\t\t\t\t\t\t\t\t</viz.data:dimensions>\n\t\t\t\t\t\t\t\t\t\t<viz.data:measures>\n\t\t\t\t\t\t\t\t\t\t\t<viz.data:MeasureDefinition name=\"Umsatz\" value=\"{proMonat}\"/>\n\t\t\t\t\t\t\t\t\t\t</viz.data:measures>\n\t\t\t\t\t\t\t\t\t</viz.data:FlattenedDataset>\n\t\t\t\t\t\t\t\t</viz:dataset>\n\t\t\t\t\t\t\t\t<viz:feeds>\n\t\t\t\t\t\t\t\t\t<viz.feeds:FeedItem uid=\"valueAxis\" type=\"Measure\" values=\"Umsatz\"/>\n\t\t\t\t\t\t\t\t\t<viz.feeds:FeedItem id=\"feedCategoryAxis\" uid=\"categoryAxis\" type=\"Dimension\" values=\"month1\"/>\n\t\t\t\t\t\t\t\t</viz:feeds>\n\t\t\t\t\t\t\t</viz:VizFrame>\n\t\t\t\t\t\t</ScrollContainer>\n\t\t\t\t\t\t<ScrollContainer id=\"page2\" horizontal=\"false\" vertical=\"true\" height=\"100%\">\n\t\t\t\t\t\t\t<Text text=\"Zahlwege\"></Text>\n\t\t\t\t\t\t</ScrollContainer>\n\t\t\t\t\t\t<ScrollContainer id=\"page3\" horizontal=\"false\" vertical=\"true\" height=\"100%\">\n\t\t\t\t\t\t\t<Text text=\"Rückläufer\"></Text>\n\t\t\t\t\t\t</ScrollContainer>\n\t\t\t\t\t\t<ScrollContainer id=\"page4\" horizontal=\"false\" vertical=\"true\" height=\"100%\">\n\t\t\t\t\t\t\t<Text text=\"Altbestände\"></Text>\n\t\t\t\t\t\t</ScrollContainer>\n\t\t\t\t\t</pages>\n\t\t\t\t</NavContainer>\n\t\t\t</tnt:mainContents>\n\t\t</tnt:ToolPage>\n\t</App>\n</mvc:View>",
		"com/convista/controller/Main.controller.js": "sap.ui.define([\n\t\"jquery.sap.global\",\n\t\"sap/ui/core/mvc/Controller\",\n\t\"sap/ui/model/json/JSONModel\",\n\t\"../sonstiges/CustomerFormat\",\n\t\"sap/m/MessageToast\"\n], function(jQuery, Controller, JSONModel, CustomerFormat, MessageToast) {\n\t\"use strict\";\n\n\treturn Controller.extend(\"com.convista.controller.Main\", {\n\t\tmodelNavi: new sap.ui.model.json.JSONModel(),\n\t\tdata: {\n\t\t\tnavigation: [{\n\t\t\t\ttitle: \"Zahlungseingang\",\n\t\t\t\ticon: \"sap-icon://simple-payment\",\n\t\t\t\ttooltip: \"Zahlungseingang\",\n\t\t\t\texpanded : false,\n\t\t\t\tkey: \"page1\"\n\t\t\t}, {\n\t\t\t\ttitle: \"Zahlwege\",\n\t\t\t\ticon: \"sap-icon://money-bills\",\n\t\t\t\ttooltip: \"Zahlwege\",\n\t\t\t\texpanded : false,\n\t\t\t\tkey: \"page2\"\n\t\t\t}, {\n\t\t\t\ttitle: \"Rückläufer\",\n\t\t\t\ticon: \"sap-icon://per-diem\",\n\t\t\t\texpanded : false,\n\t\t\t\tkey: \"page3\"\n\t\t\t}, {\n\t\t\t\ttitle: \"Altbestände\",\n\t\t\t\ticon: \"sap-icon://time-overtime\",\n\t\t\t\texpanded : false,\n\t\t\t\tkey: \"page4\"\n\t\t\t}]\n\t\t},\n\n\t\toVizFrame: null,\n\n\t\tonInit: function(evt) {\n\n\t\t\tthis.modelNavi.setData(this.data);\n\t\t\tthis.getView().setModel(this.modelNavi);\n\t\t\tthis._setToggleButtonTooltip(!sap.ui.Device.system.desktop);\n\t\t\tthis.initCustomFormat();\n\n\t\t\tvar oVizFrame = this.oVizFrame = this.getView().byId(\"idVizFrame\");\n\t\t\toVizFrame.setVizProperties({\n\t\t\t\tplotArea: {\n\t\t\t\t\tdataLabel: {\n\t\t\t\t\t\tformatString: CustomerFormat.FIORI_LABEL_SHORTFORMAT_2,\n\t\t\t\t\t\tvisible: true\n\t\t\t\t\t}\n\t\t\t\t},\n\t\t\t\tvalueAxis: {\n\t\t\t\t\tlabel: {\n\t\t\t\t\t\tformatString: CustomerFormat.FIORI_LABEL_SHORTFORMAT_2\n\t\t\t\t\t},\n\t\t\t\t\ttitle: {\n\t\t\t\t\t\tvisible: false\n\t\t\t\t\t}\n\t\t\t\t},\n\t\t\t\tcategoryAxis: {\n\t\t\t\t\ttitle: {\n\t\t\t\t\t\tvisible: false\n\t\t\t\t\t}\n\t\t\t\t},\n\t\t\t\ttitle: {\n\t\t\t\t\tvisible: false,\n\t\t\t\t\ttext: \"Umsatz\"\n\t\t\t\t}\n\t\t\t});\n\t\t\tvar dataModel = new JSONModel(\"model/BarJsonExample.json\");\n\t\t\tdataModel.setDefaultBindingMode(sap.ui.model.BindingMode.OneWay);\n\t\t\toVizFrame.setModel(dataModel);\n\n\t\t\tvar oPopOver = this.getView().byId(\"idPopOver\");\n\t\t\toPopOver.connect(oVizFrame.getVizUid());\n\t\t\t//\toPopOver.setFormatString(\"__UI5__FloatMaxFraction2\");\n\t\t\t//Hide Settings Panel for phone\n\t\t\tif (sap.ui.Device.system.phone) {\n\t\t\t\tthis.getView().byId(\"settingsPanel\").setExpanded(false);\n\t\t\t}\n\t\t},\n\t\t_setToggleButtonTooltip: function(bLarge) {\n\t\t\tvar toggleButton = this.getView().byId(\"sideNavigationToggleButton\");\n\t\t\tif (bLarge) {\n\t\t\t\ttoggleButton.setTooltip(\"Large Size Navigation\");\n\t\t\t} else {\n\t\t\t\ttoggleButton.setTooltip(\"Small Size Navigation\");\n\t\t\t}\n\t\t},\n\t\tonItemSelect: function(oEvent) {\n\t\t\tvar item = oEvent.getParameter(\"item\");\n\t\t\tvar viewId = this.getView().getId();\n\t\t\tsap.ui.getCore().byId(viewId + \"--pageContainer\").to(viewId + \"--\" + item.getKey());\n\t\t},\n\t\tonSideNavButtonPress: function() {\n\t\t\tvar viewId = this.getView().getId();\n\t\t\tvar toolPage = sap.ui.getCore().byId(viewId + \"--toolPage\");\n\t\t\tvar sideExpanded = toolPage.getSideExpanded();\n\n\t\t\tthis._setToggleButtonTooltip(sideExpanded);\n\n\t\t\ttoolPage.setSideExpanded(!toolPage.getSideExpanded());\n\t\t},\n\n\t\tinitCustomFormat: function() {\n\t\t\tCustomerFormat.registerCustomFormat();\n\t\t}\n\t\t/*,\n\t\tonZahlungseingang: function() {\n\t\t\tMessageToast.show(\"Zahlungseingang ausgewählt\");\n\t\t},\n\t\tonZahlwege: function() {\n\t\t\tMessageToast.show(\"Zahwege ausgewählt\");\n\t\t},\n\t\tonRuecklaeufer: function() {\n\t\t\tMessageToast.show(\"Rückläufer ausgewählt\");\n\t\t},\n\t\tonAltbestand: function() {\n\t\t\tMessageToast.show(\"Altbestände ausgewählt\");\n\t\t}*/\n\t});\n\n});",
		"com/convista/Component.js": "sap.ui.define([\n\t\"sap/ui/core/UIComponent\",\n\t\"sap/ui/Device\",\n\t\"com/convista/model/models\"\n], function(UIComponent, Device, models) {\n\t\"use strict\";\n\n\treturn UIComponent.extend(\"com.convista.Component\", {\n\n\t\tmetadata: {\n\t\t\tmanifest: \"json\"\n\t\t},\n\n\t\t/**\n\t\t * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.\n\t\t * @public\n\t\t * @override\n\t\t */\n\t\tinit: function() {\n\t\t\t// call the base component's init function\n\t\t\tUIComponent.prototype.init.apply(this, arguments);\n\n\t\t\t// set the device model\n\t\t\tthis.setModel(models.createDeviceModel(), \"device\");\n\t\t}\n\t});\n\n});",
		"com/convista/sonstiges/CustomerFormat.js": "sap.ui.define([\r\n    \"sap/viz/ui5/format/ChartFormatter\",\r\n    \"sap/viz/ui5/api/env/Format\"\r\n    ], function(ChartFormatter, Format) {\r\n        return  {\r\n\t\tFIORI_LABEL_SHORTFORMAT_10: \"__UI5__ShortIntegerMaxFraction10\",\r\n\t\tFIORI_LABEL_FORMAT_2: \"__UI5__FloatMaxFraction2\",\r\n\t\tFIORI_LABEL_SHORTFORMAT_2: \"__UI5__ShortIntegerMaxFraction2\",\r\n\t\tFIORI_PERCENTAGE_FORMAT_2: \"__UI5__PercentageMaxFraction2\",\r\n\t\tMFS1: \"month_s1\",\r\n\t\tMFS2: \"month_s2\",\r\n\t\tMFS3: \"month_s3\",\r\n\t\tMFS4: \"month_s4\",\r\n\t\tMDFS1: \"month_day_s1\",\r\n\t\tMDFS2: \"month_day_s5\",\r\n\t\tMDFS3: \"month_day_s6\",\r\n\t\tYFS0: \"year_s0\",\r\n\t\tYFS1: \"year_s1\",\r\n\t\tYFS2: \"year_s2\",\r\n\t\tchartFormatter: null,\r\n\t\tregisterCustomFormat: function() {\r\n\t\t\tvar chartFormatter = this.chartFormatter = ChartFormatter.getInstance();\r\n\t\t\tchartFormatter.registerCustomFormatter(this.FIORI_LABEL_SHORTFORMAT_10,\r\n\t\t\t\tfunction(value) {\r\n\t\t\t\t\tvar fixedInteger = sap.ui.core.format.NumberFormat.getIntegerInstance({\r\n\t\t\t\t\t\tstyle: \"short\",\r\n\t\t\t\t\t\tmaxFractionDigits: 10\r\n\t\t\t\t\t});\r\n\t\t\t\t\treturn fixedInteger.format(value);\r\n\t\t\t\t});\r\n\t\t\tchartFormatter.registerCustomFormatter(this.FIORI_LABEL_FORMAT_2,\r\n\t\t\t\tfunction(value) {\r\n\t\t\t\t\tvar fixedFloat = sap.ui.core.format.NumberFormat.getFloatInstance({\r\n\t\t\t\t\t\tstyle: \"Standard\",\r\n\t\t\t\t\t\tmaxFractionDigits: 2\r\n\t\t\t\t\t});\r\n\t\t\t\t\treturn fixedFloat.format(value);\r\n\t\t\t\t});\r\n\t\t\tchartFormatter.registerCustomFormatter(this.FIORI_LABEL_SHORTFORMAT_2,\r\n\t\t\t\tfunction(value) {\r\n\t\t\t\t\tvar fixedInteger = sap.ui.core.format.NumberFormat.getIntegerInstance({\r\n\t\t\t\t\t\tstyle: \"short\",\r\n\t\t\t\t\t\tmaxFractionDigits: 2\r\n\t\t\t\t\t});\r\n\t\t\t\t\treturn fixedInteger.format(value);\r\n\t\t\t\t});\r\n\t\t\tchartFormatter.registerCustomFormatter(this.FIORI_PERCENTAGE_FORMAT_2,\r\n\t\t\t\tfunction(value) {\r\n\t\t\t\t\tvar percentage = sap.ui.core.format.NumberFormat.getPercentInstance({\r\n\t\t\t\t\t\tstyle: \"precent\",\r\n\t\t\t\t\t\tmaxFractionDigits: 2\r\n\t\t\t\t\t});\r\n\t\t\t\t\treturn percentage.format(value);\r\n\t\t\t\t});\r\n\r\n\t\t\tfunction registerTime(key, formatString) {\r\n\t\t\t\tchartFormatter.registerCustomFormatter(key, function(value) {\r\n\t\t\t\t\tvar dateFormatter = sap.ui.core.format.DateFormat.getDateTimeInstance({\r\n\t\t\t\t\t\tpattern: formatString\r\n\t\t\t\t\t});\r\n\t\t\t\t\treturn dateFormatter.format(value);\r\n\t\t\t\t});\r\n\t\t\t}\r\n\t\t\tvar patterns = {\r\n\t\t\t\t\"month_s1\": \"M\",\r\n\t\t\t\t\"month_s2\": \"MM\",\r\n\t\t\t\t\"month_s3\": \"MMM\",\r\n\t\t\t\t\"month_s4\": \"MMMM\",\r\n\t\t\t\t\"month_day_s1\": \"MM/dd\",\r\n\t\t\t\t\"month_day_s5\": \"MMM d\",\r\n\t\t\t\t\"month_day_s6\": \"MMMM d\",\r\n\t\t\t\t\"year_s0\": \"yy\",\r\n\t\t\t\t\"year_s1\": \"yyy\",\r\n\t\t\t\t\"year_s2\": \"yyyy\",\r\n\t\t\t\t\"YearMonthDay\": \"MM/dd/yy\"\r\n\t\t\t};\r\n\t\t\tfor (var key in patterns) {\r\n\t\t\t\tif (patterns.hasOwnProperty(key)) {\r\n\t\t\t\t\tregisterTime(key, patterns[key]);\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t\tFormat.numericFormatter(chartFormatter);\r\n\t\t}\r\n\t};\r\n});",
		"com/convista/view/CopyOfAuswahl.fragment.xml": "<core:FragmentDefinition xmlns:html=\"http://www.w3.org/1999/xhtml\" xmlns:mvc=\"sap.ui.core.mvc\" xmlns=\"sap.m\" xmlns:l=\"sap.ui.layout\"\n\txmlns:fm=\"sap.ui.layout.form\" xmlns:core=\"sap.ui.core\">\n\t<l:ResponsiveFlowLayout id=\"resflow01\">\n\t\t<l:content>\n\t\t\t<Label text=\"Gesellschaft\" id=\"label01\" required=\"false\" labelFor=\"input01\">\n\t\t\t\t<layoutData>\n\t\t\t\t\t<l:ResponsiveFlowLayoutData id=\"resposFlow01\" weight=\"1\" linebreak=\"true\"></l:ResponsiveFlowLayoutData>\n\t\t\t\t</layoutData>\n\t\t\t</Label>\n\t\t\t<Select xmlns:sap.ui.core=\"sap.ui.core\" selectedKey=\"item1\" selectedItemId=\"item10\" id=\"gesellschaft\">\n\t\t\t\t<items>\n\t\t\t\t\t<sap.ui.core:ListItem text=\"ConVista Deutschland\" key=\"item1\" id=\"item10\"/>\n\t\t\t\t\t<sap.ui.core:ListItem text=\"ConVista Spain\" key=\"item2\" id=\"item11\"/>\n\t\t\t\t\t<sap.ui.core:ListItem text=\"ConVista India\" key=\"item3\" id=\"item12\"/>\n\t\t\t\t\t<sap.ui.core:ListItem text=\"....\" key=\"item4\" id=\"item14\"/>\n\t\t\t\t</items>\n\t\t\t\t<layoutData>\n\t\t\t\t\t<l:ResponsiveFlowLayoutData id=\"resposFlow02\" weight=\"1\"></l:ResponsiveFlowLayoutData>\n\t\t\t\t</layoutData>\n\t\t\t</Select>\n\t\t\t<Label text=\"Buchungskreis\" id=\"label02\" required=\"false\" labelFor=\"input01\">\n\t\t\t\t<layoutData>\n\t\t\t\t\t<l:ResponsiveFlowLayoutData id=\"resposFlow03\" weight=\"1\"></l:ResponsiveFlowLayoutData>\n\t\t\t\t</layoutData>\n\t\t\t</Label>\n\t\t\t<Select xmlns:sap.ui.core=\"sap.ui.core\" selectedKey=\"item1\" selectedItemId=\"item101\" id=\"buchungskreis\">\n\t\t\t\t<items>\n\t\t\t\t\t<sap.ui.core:ListItem text=\"CC01\" key=\"item1\" id=\"item101\"/>\n\t\t\t\t\t<sap.ui.core:ListItem text=\"DE02\" key=\"item2\" id=\"item111\"/>\n\t\t\t\t\t<sap.ui.core:ListItem text=\"SP05\" key=\"item3\" id=\"item121\"/>\n\t\t\t\t\t<sap.ui.core:ListItem text=\"....\" key=\"item4\" id=\"item141\"/>\n\t\t\t\t</items>\n\t\t\t\t<layoutData>\n\t\t\t\t\t<l:ResponsiveFlowLayoutData id=\"resposFlow021\" weight=\"1\"></l:ResponsiveFlowLayoutData>\n\t\t\t\t</layoutData>\n\t\t\t</Select>\n\t\t\t<Label text=\"von Monat\" id=\"label04\">\n\t\t\t\t<layoutData>\n\t\t\t\t\t<l:ResponsiveFlowLayoutData id=\"resposFlow05\" weight=\"1\"></l:ResponsiveFlowLayoutData>\n\t\t\t\t</layoutData>\n\t\t\t</Label>\n\t\t\t<Select xmlns:sap.ui.core=\"sap.ui.core\" selectedKey=\"item1\" selectedItemId=\"__item0\" id=\"selectVonMonth\">\n\t\t\t\t<items>\n\t\t\t\t\t<sap.ui.core:ListItem text=\"01\" key=\"item1\" id=\"__item0\"/>\n\t\t\t\t\t<sap.ui.core:ListItem text=\"02\" key=\"item2\" id=\"__item1\"/>\n\t\t\t\t\t<sap.ui.core:ListItem text=\"03\" key=\"item3\" id=\"__item2\"/>\n\t\t\t\t\t<sap.ui.core:ListItem text=\"04\" key=\"item4\" id=\"__item4\"/>\n\t\t\t\t</items>\n\t\t\t\t<layoutData>\n\t\t\t\t\t<l:ResponsiveFlowLayoutData id=\"resposFlow06\" weight=\"1\"></l:ResponsiveFlowLayoutData>\n\t\t\t\t</layoutData>\n\t\t\t</Select>\n\t\t\t<Label text=\"von Jahr\" id=\"label07\">\n\t\t\t\t<layoutData>\n\t\t\t\t\t<l:ResponsiveFlowLayoutData id=\"resposFlow07\" weight=\"1\"></l:ResponsiveFlowLayoutData>\n\t\t\t\t</layoutData>\n\t\t\t</Label>\n\t\t\t<Select xmlns:sap.ui.core=\"sap.ui.core\" selectedKey=\"item1\" selectedItemId=\"__item0\" id=\"__select1\">\n\t\t\t\t<items>\n\t\t\t\t\t<sap.ui.core:ListItem text=\"2012\" key=\"item1\" id=\"__item00\"/>\n\t\t\t\t\t<sap.ui.core:ListItem text=\"2013\" key=\"item2\" id=\"__item10\"/>\n\t\t\t\t\t<sap.ui.core:ListItem text=\"2014\" key=\"item3\" id=\"__item30\"/>\n\t\t\t\t\t<sap.ui.core:ListItem text=\"2015\" key=\"item4\" id=\"__item40\"/>\n\t\t\t\t\t<sap.ui.core:ListItem text=\"2016\" key=\"item5\" id=\"__item50\"/>\n\t\t\t\t</items>\n\t\t\t\t<layoutData>\n\t\t\t\t\t<l:ResponsiveFlowLayoutData id=\"resposFlow08\" weight=\"1\"></l:ResponsiveFlowLayoutData>\n\t\t\t\t</layoutData>\n\t\t\t</Select>\n\t\t\t<Label text=\"bis Monat\" id=\"label09\">\n\t\t\t\t<layoutData>\n\t\t\t\t\t<l:ResponsiveFlowLayoutData id=\"resposFlow09\" weight=\"1\"></l:ResponsiveFlowLayoutData>\n\t\t\t\t</layoutData>\n\t\t\t</Label>\n\t\t\t<Select xmlns:sap.ui.core=\"sap.ui.core\" selectedKey=\"item1\" selectedItemId=\"__item110\" id=\"__select10\">\n\t\t\t\t<items>\n\t\t\t\t\t<sap.ui.core:ListItem text=\"01\" key=\"item1\" id=\"__item110\"/>\n\t\t\t\t\t<sap.ui.core:ListItem text=\"02\" key=\"item2\" id=\"__item111\"/>\n\t\t\t\t\t<sap.ui.core:ListItem text=\"03\" key=\"item3\" id=\"__item112\"/></items>\n\t\t\t\t<layoutData>\n\t\t\t\t\t<l:ResponsiveFlowLayoutData id=\"resposFlow016\" weight=\"1\"></l:ResponsiveFlowLayoutData>\n\t\t\t\t</layoutData>\n\t\t\t</Select>\n\t\t\t<Label text=\"bis Jahr\" id=\"label017\">\n\t\t\t\t<layoutData>\n\t\t\t\t\t<l:ResponsiveFlowLayoutData id=\"resposFlow017\" weight=\"1\"></l:ResponsiveFlowLayoutData>\n\t\t\t\t</layoutData>\n\t\t\t</Label>\n\t\t\t<Select xmlns:sap.ui.core=\"sap.ui.core\" selectedKey=\"item1\" selectedItemId=\"__item0\" id=\"__select11\">\n\t\t\t\t<items>\n\t\t\t\t\t<sap.ui.core:ListItem text=\"2012\" key=\"item1\" id=\"__item1100\"/>\n\t\t\t\t\t<sap.ui.core:ListItem text=\"2013\" key=\"item2\" id=\"__item1110\"/>\n\t\t\t\t\t<sap.ui.core:ListItem text=\"2014\" key=\"item3\" id=\"__item1130\"/>\n\t\t\t\t\t<sap.ui.core:ListItem text=\"2015\" key=\"item4\" id=\"__item1140\"/>\n\t\t\t\t\t<sap.ui.core:ListItem text=\"2016\" key=\"item5\" id=\"__item1150\"/>\n\t\t\t\t</items>\n\t\t\t\t<layoutData>\n\t\t\t\t\t<l:ResponsiveFlowLayoutData id=\"resposFlow108\" weight=\"1\"></l:ResponsiveFlowLayoutData>\n\t\t\t\t</layoutData>\n\t\t\t</Select>\n\t\t</l:content>\n\t</l:ResponsiveFlowLayout>\n</core:FragmentDefinition>",
		"com/convista/controller/Lastschrift.controller.js": "sap.ui.define([\r\n\t\"sap/ui/core/mvc/Controller\"\r\n], function(Controller) {\r\n\t\"use strict\";\r\n\r\n\treturn Controller.extend(\"com.convista.controller.Lastschrift\", {\r\n\r\n\t\t/**\r\n\t\t * Called when a controller is instantiated and its View controls (if available) are already created.\r\n\t\t * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.\r\n\t\t * @memberOf com.convista.view.view.Lastschrift\r\n\t\t */\r\n\t\t//\tonInit: function() {\r\n\t\t//\r\n\t\t//\t},\r\n\r\n\t\t/**\r\n\t\t * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered\r\n\t\t * (NOT before the first rendering! onInit() is used for that one!).\r\n\t\t * @memberOf com.convista.view.view.Lastschrift\r\n\t\t */\r\n\t\t//\tonBeforeRendering: function() {\r\n\t\t//\r\n\t\t//\t},\r\n\r\n\t\t/**\r\n\t\t * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.\r\n\t\t * This hook is the same one that SAPUI5 controls get after being rendered.\r\n\t\t * @memberOf com.convista.view.view.Lastschrift\r\n\t\t */\r\n\t\t//\tonAfterRendering: function() {\r\n\t\t//\r\n\t\t//\t},\r\n\r\n\t\t/**\r\n\t\t * Called when the Controller is destroyed. Use this one to free resources and finalize activities.\r\n\t\t * @memberOf com.convista.view.view.Lastschrift\r\n\t\t */\r\n\t\t//\tonExit: function() {\r\n\t\t//\r\n\t\t//\t}\r\n\r\n\t});\r\n\r\n});",
		"com/convista/model/models.js": "sap.ui.define([\n\t\"sap/ui/model/json/JSONModel\",\n\t\"sap/ui/Device\"\n], function(JSONModel, Device) {\n\t\"use strict\";\n\n\treturn {\n\n\t\tcreateDeviceModel: function() {\n\t\t\tvar oModel = new JSONModel(Device);\n\t\t\toModel.setDefaultBindingMode(\"OneWay\");\n\t\t\treturn oModel;\n\t\t}\n\n\t};\n\n});",
		"com/convista/view/Lastschrift.view.xml": "<mvc:View xmlns:core=\"sap.ui.core\" xmlns:mvc=\"sap.ui.core.mvc\" xmlns=\"sap.m\" xmlns:l=\"sap.ui.layout\" \ncontrollerName=\"com.convista.view.Lastschrift\"\n\txmlns:html=\"http://www.w3.org/1999/xhtml\">\n\t<App>\n\t\t<pages>\n\t\t\t<Page id=\"pg1\" title=\"Lastschrift\">\n\t\t\t\t<content>\n    \t\t\t\t<l:FixFlex id=\"fixflex01\" minFlexSize=\"50px\">\n\t\t\t\t\t\t<l:fixContent>\n\t\t\t\t\t\t\t<core:Fragment fragmentName=\"com.convista.view.Auswahl\" type=\"XML\"/>\n\t\t\t\t        </l:fixContent>\n\t\t\t\t    </l:FixFlex>       \n\t\t\t\t</content>\n\t\t\t</Page>\n\t\t</pages>\n\t</App>\n</mvc:View>",
		"com/convista/view/Auswahl.fragment.xml": "<core:FragmentDefinition xmlns:html=\"http://www.w3.org/1999/xhtml\" xmlns:mvc=\"sap.ui.core.mvc\" xmlns=\"sap.m\" xmlns:l=\"sap.ui.layout\"\n\txmlns:fm=\"sap.ui.layout.form\" xmlns:core=\"sap.ui.core\">\n\t<Panel id='settingsPanel' class=\"panelStyle\" expandable=\"true\" expanded=\"true\" headerText=\"{i18n>setting}\" width=\"auto\">\n\t\t<content>\n\t\t\t<HBox class='settingsHBox'>\n\t\t\t\t<VBox class='settingsBox' width=\"25%\">\n\t\t\t\t\t<Label text=\"Gesellschaft\" id=\"label01\" required=\"false\" design=\"Bold\" class='settingsLabel' labelFor=\"input01\"/>\n\t\t\t\t\t<Select xmlns:sap.ui.core=\"sap.ui.core\" selectedKey=\"item1\" selectedItem=\"item10\" selectedItemId=\"item10\" id=\"gesellschaft\" width=\"90%\">\n\t\t\t\t\t\t<items>\n\t\t\t\t\t\t\t<sap.ui.core:ListItem text=\"ConVista Deutschland\" key=\"item1\" id=\"item10\"/>\n\t\t\t\t\t\t\t<sap.ui.core:ListItem text=\"ConVista Spain\" key=\"item2\" id=\"item11\"/>\n\t\t\t\t\t\t\t<sap.ui.core:ListItem text=\"ConVista India\" key=\"item3\" id=\"item12\"/>\n\t\t\t\t\t\t\t<sap.ui.core:ListItem text=\"....\" key=\"item4\" id=\"item14\"/>\n\t\t\t\t\t\t</items>\n\t\t\t\t\t</Select>\n\t\t\t\t</VBox>\n\t\t\t\t<VBox class='settingsBox' width=\"20%\">\n\t\t\t\t\t<Label text=\"Buchungskreis\" id=\"label02\" required=\"false\" design=\"Bold\" class='settingsLabel' labelFor=\"buchungskreis\"/>\n\t\t\t\t\t<Select xmlns:sap.ui.core=\"sap.ui.core\" selectedKey=\"item1\" selectedItem=\"item101\" selectedItemId=\"item101\" id=\"buchungskreis\">\n\t\t\t\t\t\t<items>\n\t\t\t\t\t\t\t<sap.ui.core:ListItem text=\"CC01\" key=\"item1\" id=\"item101\"/>\n\t\t\t\t\t\t\t<sap.ui.core:ListItem text=\"DE02\" key=\"item2\" id=\"item111\"/>\n\t\t\t\t\t\t\t<sap.ui.core:ListItem text=\"SP05\" key=\"item3\" id=\"item121\"/>\n\t\t\t\t\t\t\t<sap.ui.core:ListItem text=\"....\" key=\"item4\" id=\"item141\"/>\n\t\t\t\t\t\t</items>\n\t\t\t\t\t</Select>\n\t\t\t\t</VBox>\n\t\t\t\t<VBox class='settingsBox'>\n\t\t\t\t\t<Label text=\"von Monat\" id=\"label04\" design=\"Bold\" class=\"settingsLabel\"/>\n\t\t\t\t\t<Select xmlns:sap.ui.core=\"sap.ui.core\" selectedKey=\"item1\" selectedItem=\"item0011\" selectedItemId=\"item0011\" id=\"selectVonMonth\">\n\t\t\t\t\t\t<items>\n\t\t\t\t\t\t\t<sap.ui.core:ListItem text=\"01\" key=\"item1\" id=\"item0011\"/>\n\t\t\t\t\t\t\t<sap.ui.core:ListItem text=\"02\" key=\"item2\" id=\"item0111\"/>\n\t\t\t\t\t\t\t<sap.ui.core:ListItem text=\"03\" key=\"item3\" id=\"item0211\"/>\n\t\t\t\t\t\t\t<sap.ui.core:ListItem text=\"04\" key=\"item4\" id=\"item0411\"/>\n\t\t\t\t\t\t</items>\n\t\t\t\t\t</Select>\n\t\t\t\t</VBox>\n\t\t\t\t<VBox class='settingsBox' width=\"16%\">\n\t\t\t\t\t<Label text=\"von Jahr\" id=\"label07\" design=\"Bold\" class=\"settingsLabel\"/>\n\t\t\t\t\t<Select xmlns:sap.ui.core=\"sap.ui.core\" selectedKey=\"item1\" selectedItem=\"item100\" selectedItemId=\"item100\" id=\"selectVonJahr\">\n\t\t\t\t\t\t<items>\n\t\t\t\t\t\t\t<sap.ui.core:ListItem text=\"2012\" key=\"item1\" id=\"item100\"/>\n\t\t\t\t\t\t\t<sap.ui.core:ListItem text=\"2013\" key=\"item2\" id=\"item110\"/>\n\t\t\t\t\t\t\t<sap.ui.core:ListItem text=\"2014\" key=\"item3\" id=\"item130\"/>\n\t\t\t\t\t\t\t<sap.ui.core:ListItem text=\"2015\" key=\"item4\" id=\"item140\"/>\n\t\t\t\t\t\t\t<sap.ui.core:ListItem text=\"2016\" key=\"item5\" id=\"item150\"/>\n\t\t\t\t\t\t</items>\n\t\t\t\t\t</Select>\n\t\t\t\t</VBox>\n\t\t\t\t<VBox class='settingsBox'>\n\t\t\t\t\t<Label text=\"bis Monat\" id=\"label09\" design=\"Bold\" class=\"settingsLabel\"/>\n\t\t\t\t\t<Select xmlns:sap.ui.core=\"sap.ui.core\" selectedKey=\"item1\" selectedItem=\"item1101\" selectedItemId=\"item1101\" id=\"bisMonat\">\n\t\t\t\t\t\t<items>\n\t\t\t\t\t\t\t<sap.ui.core:ListItem text=\"01\" key=\"item1\" id=\"item1101\"/>\n\t\t\t\t\t\t\t<sap.ui.core:ListItem text=\"02\" key=\"item2\" id=\"item1111\"/>\n\t\t\t\t\t\t\t<sap.ui.core:ListItem text=\"03\" key=\"item3\" id=\"item1121\"/></items>\n\t\t\t\t\t</Select>\n\t\t\t\t</VBox>\n\t\t\t\t<VBox class='settingsBox' width=\"16%\">\n\t\t\t\t\t<Label text=\"bis Jahr\" id=\"label017\" design=\"Bold\" class=\"settingsLabel\"/>\n\t\t\t\t\t<Select xmlns:sap.ui.core=\"sap.ui.core\" selectedKey=\"item1\" selectedItem=\"__item1100\" selectedItemId=\"__item1100\" id=\"__select11\">\n\t\t\t\t\t\t<items>\n\t\t\t\t\t\t\t<sap.ui.core:ListItem text=\"2012\" key=\"item1\" id=\"__item1100\"/>\n\t\t\t\t\t\t\t<sap.ui.core:ListItem text=\"2013\" key=\"item2\" id=\"__item1110\"/>\n\t\t\t\t\t\t\t<sap.ui.core:ListItem text=\"2014\" key=\"item3\" id=\"__item1130\"/>\n\t\t\t\t\t\t\t<sap.ui.core:ListItem text=\"2015\" key=\"item4\" id=\"__item1140\"/>\n\t\t\t\t\t\t\t<sap.ui.core:ListItem text=\"2016\" key=\"item5\" id=\"__item1150\"/>\n\t\t\t\t\t\t</items>\n\t\t\t\t\t</Select>\n\t\t\t\t</VBox>\n\t\t\t</HBox>\n\t\t</content>\n\t</Panel>\n</core:FragmentDefinition>"
	}
});