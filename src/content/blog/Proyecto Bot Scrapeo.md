---
title: 'BotTelegramViajes - Sistema de Scraping Automatizado para Ofertas de Vuelos'
description: 'Sistema automatizado de monitoreo de ofertas de vuelos con web scraping avanzado, notificaciones por Telegram y detección automática de cambios en formularios de aerolíneas'
pubDate: '2025-07-15'
heroImage: '/Telegram-Bot-viajes.jpg'
---

## Descripción del Proyecto

BotTelegramViajesIA nació de la necesidad de automatizar la búsqueda y monitoreo de ofertas de vuelos en tiempo real, utilizando tecnologías de web scraping avanzado y notificaciones inteligentes a través de Telegram. El sistema está diseñado para detectar automáticamente vuelos baratos y cambios en formularios de aerolíneas, proporcionando alertas instantáneas a los usuarios.

El proyecto incluye dos bots especializados: un monitor de precios para Despegar Argentina y un vigilante de formularios para Flybondi, ambos integrando técnicas avanzadas de automatización web y comunicación en tiempo real. El sistema implementa estrategias anti-detección sofisticadas, procesamiento inteligente de datos y notificaciones automáticas personalizadas, eliminando completamente la necesidad de monitoreo manual de ofertas de vuelos.

## Tecnologías Utilizadas

- **Backend**: Python 3.8+, Selenium WebDriver, ChromeDriver Manager
- **Web Scraping**: Selenium con configuraciones anti-detección, XPath selectores dinámicos
- **Notificaciones**: API de Telegram con formato Markdown, múltiples chat IDs
- **Automatización**: WebDriver con opciones personalizadas, manejo de cookies y popups
- **Procesamiento de Datos**: Regex avanzado, filtrado inteligente de precios, normalización de datos
- **Herramientas**: Requests, logging estructurado, manejo de errores robusto
- **Configuración**: Chrome options avanzadas, user agents argentinos, timing inteligente

## Funcionalidades Principales

### **1. Bot Despegar Argentina (BotDespegarSimple.py)**
- **Monitoreo Inteligente**: Búsqueda automática de vuelos BUE→MIA con presupuesto configurable
- **Detección Anti-Bot**: Configuraciones avanzadas de Chrome para evitar detección
- **Filtrado de Precios**: Algoritmo inteligente para identificar precios realistas (ARS 50.000 - 5.000.000)
- **Notificaciones Telegram**: Alertas automáticas con formato Markdown y enlaces directos
- **Manejo Robusto**: Gestión automática de cookies, popups y elementos dinámicos

### **2. Bot Flybondi Monitor (BotFlybondiMonitor.py)**
- **Vigilancia Continua**: Monitoreo en tiempo real del estado de formularios
- **Detección de Cambios**: Alerta instantánea cuando se abren formularios cerrados
- **Notificaciones Múltiples**: Envío a múltiples chat IDs de Telegram
- **Recarga Automática**: Sistema de refresh inteligente con contadores de estado

### **3. Sistema de Testing (test_despegar_v2.py)**
- **Validación de Funcionalidad**: Pruebas exhaustivas de selectores y patrones
- **Debug Avanzado**: Análisis detallado de elementos de página
- **Verificación de Precios**: Testing de algoritmos de extracción de precios
- **Optimización de Selectores**: Refinamiento continuo de XPath y estrategias

### **4. Sistema de Notificaciones Inteligentes**
- **Formato Markdown**: Mensajes estructurados con emojis y enlaces directos
- **Múltiples Destinos**: Soporte para varios chat IDs simultáneamente
- **Retry Automático**: Sistema de reintentos ante fallos de conexión
- **Fallback Graceful**: Degradación elegante sin formato en caso de errores

## Arquitectura del Sistema

### **1. Capa de Web Scraping**
- **Driver Manager**: Instalación automática de ChromeDriver
- **Configuración Anti-Detección**: User agents argentinos, opciones de Chrome optimizadas
- **Manejo de Elementos**: Selectores XPath dinámicos, esperas inteligentes
- **Gestión de Estado**: Control de cookies, popups y elementos emergentes

### **2. Capa de Procesamiento de Datos**
- **Extracción de Precios**: Patrones regex para moneda argentina
- **Filtrado Inteligente**: Validación de rangos de precios realistas
- **Normalización**: Limpieza y estandarización de datos extraídos
- **Deduplicación**: Eliminación de precios duplicados y ordenamiento

### **3. Capa de Notificaciones**
- **API Telegram**: Integración completa con bot de Telegram
- **Formato Markdown**: Mensajes estructurados con emojis y enlaces
- **Múltiples Destinos**: Soporte para varios chat IDs
- **Manejo de Errores**: Retry automático y fallback sin formato

### **4. Capa de Testing y Validación**
- **Validación Continua**: Verificación automática de funcionalidades
- **Debug Avanzado**: Análisis detallado de problemas y soluciones
- **Optimización**: Refinamiento continuo de estrategias de extracción
- **Monitoreo de Estado**: Control de operatividad del sistema

## Desafíos Técnicos Resueltos

### **1. Anti-Detección de Bots**
- **Configuración Chrome**: Opciones avanzadas para evitar detección
- **User Agents**: Simulación de navegadores argentinos reales
- **Timing Inteligente**: Esperas dinámicas y comportamiento humano
- **Manejo de Cookies**: Gestión automática de banners de consentimiento

### **2. Robustez del Web Scraping**
- **Selectores Múltiples**: Estrategias de fallback para elementos dinámicos
- **Manejo de Errores**: Try-catch exhaustivo en todas las operaciones
- **Recuperación Automática**: Continuación del proceso ante fallos
- **Debug Avanzado**: Logging detallado para troubleshooting

### **3. Procesamiento de Datos en Tiempo Real**
- **Patrones Regex**: Identificación precisa de precios en pesos argentinos
- **Validación de Datos**: Filtrado de precios realistas y relevantes
- **Optimización de Rendimiento**: Procesamiento eficiente de grandes volúmenes
- **Persistencia**: Almacenamiento temporal de resultados para análisis

### **4. Integración con APIs Externas**
- **Telegram Bot API**: Implementación completa con manejo de errores
- **Rate Limiting**: Control automático de límites de API
- **Retry Logic**: Sistema inteligente de reintentos ante fallos
- **Fallback Strategies**: Degradación elegante del servicio

## Resultados Obtenidos

### **1. Sistema Completamente Operativo**
- **Bot Despegar**: Monitoreo exitoso de vuelos BUE→MIA con notificaciones automáticas
- **Bot Flybondi**: Vigilancia continua de formularios con alertas instantáneas
- **Testing Avanzado**: Validación completa de funcionalidades y optimización continua

### **2. Automatización Inteligente**
- **Detección Automática**: Identificación de ofertas sin intervención manual
- **Notificaciones en Tiempo Real**: Alertas instantáneas por Telegram
- **Filtrado Inteligente**: Solo precios relevantes y dentro del presupuesto
- **Manejo Robusto**: Continuidad operativa ante cambios en sitios web

### **3. Integración Completa**
- **Telegram API**: Comunicación bidireccional con usuarios
- **Web Scraping**: Extracción confiable de datos de múltiples fuentes
- **Procesamiento**: Análisis inteligente y filtrado automático
- **Notificaciones**: Sistema de alertas personalizable y confiable

### **4. Eficiencia Operativa**
- **Monitoreo 24/7**: Vigilancia continua sin interrupciones
- **Detección Rápida**: Identificación de ofertas en tiempo real
- **Notificaciones Instantáneas**: Alertas inmediatas por Telegram
- **Operación Autónoma**: Funcionamiento sin supervisión manual

## Aprendizajes Técnicos

### **1. Web Scraping Avanzado**
- **Técnicas Anti-Detección**: Configuración de navegadores para evitar bloqueos
- **Manejo de Elementos Dinámicos**: Estrategias para sitios con JavaScript complejo
- **Robustez Operativa**: Continuidad del servicio ante cambios en sitios web
- **Optimización de Performance**: Balance entre velocidad y confiabilidad

### **2. Automatización Web**
- **Selenium WebDriver**: Configuración avanzada y manejo de opciones
- **Gestión de Estado**: Control de cookies, popups y elementos emergentes
- **Timing Inteligente**: Esperas dinámicas y comportamiento humano
- **Recuperación de Errores**: Estrategias para mantener operatividad

### **3. Integración de APIs**
- **Telegram Bot API**: Implementación completa con formato Markdown
- **Manejo de Errores**: Retry automático y fallback graceful
- **Notificaciones Múltiples**: Soporte para varios destinos simultáneos
- **Formato de Mensajes**: Estructura clara y visualmente atractiva

### **4. Procesamiento de Datos Inteligente**
- **Patrones Regex Avanzados**: Identificación precisa de información específica
- **Validación de Datos**: Filtrado inteligente de información relevante
- **Normalización**: Estandarización de datos de múltiples fuentes
- **Optimización**: Procesamiento eficiente de grandes volúmenes de información

## Casos de Uso

### **1. Monitoreo de Ofertas**
- **Búsqueda Continua**: Vigilancia 24/7 de precios de vuelos
- **Alertas Automáticas**: Notificaciones instantáneas de ofertas
- **Filtrado Inteligente**: Solo precios dentro del presupuesto del usuario
- **Seguimiento de Rutas**: Monitoreo específico de trayectos deseados

### **2. Vigilancia de Formularios**
- **Cambios de Estado**: Detección automática de apertura/cierre
- **Alertas Urgentes**: Notificaciones inmediatas para oportunidades
- **Monitoreo Continuo**: Vigilancia sin interrupciones
- **Múltiples Destinos**: Alertas a varios usuarios simultáneamente

### **3. Testing y Optimización**
- **Validación de Funcionalidad**: Verificación continua de operatividad
- **Optimización de Selectores**: Refinamiento de estrategias de extracción
- **Debug Avanzado**: Análisis detallado de problemas y soluciones
- **Mejora Continua**: Iteración constante basada en resultados

### **4. Automatización de Viajes**
- **Búsqueda de Ofertas**: Localización automática de vuelos económicos
- **Monitoreo de Precios**: Seguimiento de cambios en tarifas
- **Alertas Personalizadas**: Notificaciones según preferencias del usuario
- **Optimización de Costos**: Identificación de mejores momentos para comprar



## Enlaces del Proyecto

**🌐 Repositorio Principal**: [Bot Telegram Viajes](https://github.com/Gandara03/BotsTelegram/tree/main)

## 📸 Imágenes del Bot en Acción

### **1. Bot Despegar - Monitoreo de Vuelos**
![Bot Despegar - Monitoreo de Vuelos](/Imagen%20BOTVIAJESDESPEGAR.png)

*Sistema de monitoreo automático de precios de vuelos en Despegar Argentina*

### **2. Bot Flybondi - Vigilancia de Formularios**
![Bot Flybondi - Vigilancia de Formularios](/ImagenBotFlybondi.png)

*Monitoreo continuo del estado de formularios y sorteos en Flybondi* 