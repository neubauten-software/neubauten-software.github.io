<?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
<xsl:template match="/">
  <html>
  <body>
    <span><xsl:value-of select="Application/JavaScript"/><span>
  </body>
  </html>
</xsl:template>
</xsl:stylesheet>
