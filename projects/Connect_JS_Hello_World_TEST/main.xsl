<?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:output xls:method="text"
        xsl:standalone="yes"/>
    <xsl:template match="/">
        <xsl:apply-templates select="Application">
    </xsl:template>
    <xsl:template match="Application">
        <body>
            <xsl:value-of select="Application"/>
        </body>
    </xsl:template>
</xsl>
